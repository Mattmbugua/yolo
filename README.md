# YOLO E-commerce App Deployment using Ansible

This project automates the deployment of a containerized e-commerce application using Ansible. It configures the necessary environment, installs Docker, pulls Docker images, sets up containers for the backend, frontend, and MongoDB, and ensures smooth orchestration across the stack.

---

## 📦 Project Structure


```
.
├── ansible.cfg                  # Ansible configuration file
├── inventory                    # Inventory file with host definitions
├── playbook.yml                 # Main Ansible playbook
├── explanation.md               # Project explanation and rationale
├── README.md                    # Project documentation
├── roles/                       # Ansible roles directory
│   ├── docker-setup/            # Role to install and configure Docker
│   ├── network_setup/           # Role to create Docker networks
│   ├── setup-mongodb/           # Role to deploy MongoDB container
│   ├── backend-deployment/      # Role to deploy the backend app
│   └── frontend-deployment/     # Role to deploy the frontend app
├── manifests/ # Kubernetes manifest files for GKE deployment
│ ├── backend-deployment.yaml
│ ├── backend-service.yaml
│ ├── frontend-deployment.yaml
│ ├── frontend-service.yaml
│ ├── mongo-statefulset.yaml
│ └── mongo-headless-service.yaml
└── Vagrantfile # Vagrant file to provision the Ubuntu VM
```


---

## 🚀 Technologies Used

- Ansible – for orchestration
- Docker – containerization
- MongoDB – NoSQL database
- Node.js / Express – backend
- React – frontend
- Vagrant & VirtualBox – development environment
- Kubernetes (StatefulSet, Deployment, Service, PVC)
- Google Kubernetes Engine (GKE)

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Mattmbugua/yolo.git
cd yolo

## 🚀 Start VM & Run Ansible Playbook

Follow these steps to provision the virtual machine and deploy the Dockerized e-commerce application using Ansible:

### 1. Start the Virtual Machine

Make sure you have [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) installed.

```bash
vagrant up
```

This command will:
- Download the Ubuntu 20.04 base image (if not already downloaded)
- Boot the VM
- Configure SSH access

### 2. SSH into the VM (Optional)

To manually access the VM:

```bash
vagrant ssh
```

### 3. Run the Ansible Playbook

From your project root (where `playbook.yml` and `inventory.yml` are located), run:

```bash
ansible-playbook -i inventory.yml playbook.yml
```

This will execute the playbook and run all tasks, including:
- Creating the necessary Docker networks and creating the volume used.
- Installing Docker
- Setting up the MongoDB container
- Deploying the backend and frontend apps

### 4. Access the application
Once the playbook has finished running successfully, you should be able to access the YOLO e-commerce app by navigating to the VM's IP address in your browser (or localhost if you're running it locally):

    front end : http://localhost:3000
    back end: http://localhost:5000

## Usage Instructions

### 1. Access the Application

Once the playbook has completed running successfully and the application is deployed, you can access the YOLO e-commerce app through your browser:

- Open your browser and go to:

    front end : http://localhost:3000
    back end: http://localhost:5000

### 2. Interacting with the Application

Once the application is live, you can interact with the following features:

- **Browse products**: View the list of products available for purchase.
- **add products**: add to the list of products available


### 3. Docker Management in VM

If you need to restart or stop the application, you can use Docker commands to manage the containers:

- To view running containers:

        vagrant ssh

        ```bash
        docker ps

- To view logs from the containers:

       docker logs matt-backend-container
       docker logs matt-client-container
       docker logs app-mongo


## Troubleshooting

If you encounter any issues during setup or usage of the application, check the following:

### 1. **Check Docker Logs**

If a container isn't behaving as expected (e.g., it fails to start or crashes), you can inspect the logs to help diagnose the issue.

- To view the logs for a running container, use the following command:

  ```bash
    docker logs matt-backend-container
    docker logs matt-client-container
    docker logs app-mongo


  

### 2. **Check Network Connectivity**
    If the application isn't accessible, ensure that the containers are correctly connected to the network.
    To view the network connections and inspect the container's network settings, use:
        docker network ls
        docker network inspect app-net

### 3. **Check Docker Volume Connectivity**
    If your containers are using Docker volumes (for persistent storage, etc.), ensure the volumes are correctly mounted and connected.
    To list the Docker volumes, use:

        docker volume ls
    To inspect a specific volume, use:

        docker volume inspect app-mongo-data

# Kubernetes Deployment on GKE

This project demonstrates the orchestration of a full-stack e-commerce application using Kubernetes on Google Kubernetes Engine (GKE). It builds upon the Dockerized app and uses Kubernetes concepts including Deployments, StatefulSets, Services, and Persistent Volumes.

---

## 🚀 Live Application

📍 Access the running application at:

**http://34.71.114.19/
