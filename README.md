# YOLO E-commerce App Deployment using Ansible

This project automates the deployment of a containerized e-commerce application using Ansible. It configures the necessary environment, installs Docker, pulls Docker images, sets up containers for the backend, frontend, and MongoDB, and ensures smooth orchestration across the stack.

---

## 📦 Project Structure
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


