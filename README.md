YOLO E-commerce App Deployment using Ansible

This project automates the deployment of a containerized e-commerce application using Ansible. It configures the necessary environment, installs Docker, pulls Docker images, sets up containers for the backend, frontend, and MongoDB, and ensures smooth orchestration across the stack.
📦 Project Structure

.
├── ansible.cfg
├── inventory
├── playbook.yml
├── roles/
│   ├── docker-setup/
│   ├── network_setup/
│   ├── setup-mongodb/
│   ├── backend-deployment/
│   └── frontend-deployment/
├── explanation.md
└── README.md

🚀 Technologies Used

    Ansible – for orchestration

    Docker – containerization

    MongoDB – NoSQL database

    Node.js / Express – backend

    React – frontend

    Vagrant & VirtualBox – development environment

🔧 Setup Instructions
1. Clone the Repository

git clone https://github.com/your-username/yolo-ecommerce-ansible.git
cd yolo-ecommerce-ansible

2. Start the VM

vagrant up

3. Run the Ansible Playbook

ansible-playbook -i inventory playbook.yml


