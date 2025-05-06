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
└── Vagrantfile                  # Vagrant file to provision the Ubuntu VM
```


---

## 🚀 Technologies Used

- Ansible – for orchestration
- Docker – containerization
- MongoDB – NoSQL database
- Node.js / Express – backend
- React – frontend
- Vagrant & VirtualBox – development environment

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

