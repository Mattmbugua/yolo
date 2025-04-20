1. Choice of base image in each container.
---------------------------------------


Back end
--------

For back end i used node:14 which has an environment ideal for installation of all the required dependencies. For the second stage i used alpine:3.16.7, a minimal Linux distribution helps reduce the size of th image. I installed nodejs and npm manually in this stage, ensuring only the required runtime components are present. This resulted in a secure and lean image.

Front end
---------
The frontend also uses a multi-stage build. The first stage uses node:14-slim to install and build the web application. The second stage uses "nginx:alpine" to serve the static files. Nginx is a web server used to serve production builds of react applications. The alpine version of nginx helps reduce the size of the image.

Mongo-DB
-----
This was used because it doesnt require a lot of setup and it is easy to use. 

2. Dockerfile Directives Used in Each Container
-----------------------------------------------

### Backend

The backend Dockerfile uses a **multi-stage build**:

- `FROM node:14 AS build` – Uses the full Node.js image to install dependencies and copy the application code.
- `WORKDIR /usr/src/app` – Sets the working directory inside the container.
- `COPY package*.json ./` and `RUN npm install` – Installs dependencies based on the package files.
- `COPY . .` – Copies all application files.
- `FROM alpine:3.16.7` – Switches to a lightweight Alpine Linux image for the final build.
- `RUN apk update && apk add --no-cache nodejs npm` – Installs only necessary Node.js runtime for production.
- `COPY --from=build /usr/src/app /app` – Copies the prepared code from the build stage.
- `EXPOSE 5000` – Exposes port 5000 used by the Express server.
- `CMD ["node", "server.js"]` – Starts the backend server.

This combination ensures a clean, efficient image ready for production with minimal dependencies.

### Frontend

The frontend Dockerfile also uses a **multi-stage build**:

- `FROM node:14-slim AS build` – Slim variant of Node.js to reduce build size.
- `WORKDIR /usr/src/app` – Sets the working directory.
- `COPY package*.json ./` and `RUN npm install` – Installs React app project dependencies.
- `COPY . .` – Adds all the source code.
- `RUN npm run build` – To build a production ready react application.

The second stage:

- `FROM nginx:alpine` – Uses Nginx to serve static files efficiently.
- `COPY --from=build /usr/src/app/build /usr/share/nginx/html` – Places the React build output in Nginx’s root directory.
- `EXPOSE 80` – Exposes port 80.
- `CMD ["nginx", "-g", "daemon off;"]` – Starts Nginx in the foreground to keep the container running.

This approach ensures the app is served through a fast, lightweight web server.

### MongoDB

The MongoDB service uses the official `mongo` image, which includes its own entrypoint. No custom Dockerfile needed, and port `27017` was exposed for database access.
