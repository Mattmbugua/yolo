Choice of base image in each container.
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

