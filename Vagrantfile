# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Use Ubuntu 20.04 (Focal Fossa)
  config.vm.box = "ubuntu/focal64"
  config.vm.hostname = "ecommerce"

  # Forward port 3000 from guest to host (e.g. Node.js/React app)
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Optional: You can also use a private network
  config.vm.network "private_network", ip: "192.168.56.10"

  # VirtualBox configuration
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.cpus = 2
  end

  # Ansible provisioning
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
  end
end
