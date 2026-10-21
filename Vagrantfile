# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Système : Ubuntu Server 22.04 LTS
  config.vm.box = "ubuntu/jammy64"
  config.vm.hostname = "garderie-prod"
  config.vm.boot_timeout = 1800

  # Réseau privé avec adresse IP fixe : 192.168.56.10
  config.vm.network "private_network", ip: "192.168.56.10"

  # Réseau public bridged sur ens33 (débit correct)
  config.vm.network "public_network", bridge: "ens33"

  # Redirection de ports (accès direct à l'application web)
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true
  config.vm.network "forwarded_port", guest: 5000, host: 5000, auto_correct: true

  # Caractéristiques matérielles : 2 Go RAM, 2 vCPU
  config.vm.provider "virtualbox" do |vb|
    vb.name = "garderie-prod"
    vb.memory = "2048"
    vb.cpus = 2
    vb.customize ["modifyvm", :id, "--cableconnected1", "on"]
    vb.customize ["modifyvm", :id, "--uartmode1", "disconnected"]
    vb.customize ["modifyvm", :id, "--nictype1", "virtio"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end

  # Provisioning Ansible
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/site.yml"
    ansible.inventory_path = "ansible/inventory.ini"
    ansible.limit = "all"
    ansible.extra_vars = {
      ansible_python_interpreter: "/usr/bin/python3"
    }
  end
end
