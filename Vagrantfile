# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Système : Ubuntu Server 22.04 LTS
  config.vm.box = "ubuntu/jammy64"
  config.vm.hostname = "garderie-prod"

  # Réseau privé avec adresse IP fixe : 192.168.56.10
  config.vm.network "private_network", ip: "192.168.56.10"

  # Redirection de ports (accès direct à l'application web)
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true
  config.vm.network "forwarded_port", guest: 5000, host: 5000, auto_correct: true

  # Caractéristiques matérielles : 2 Go RAM, 2 vCPU
  config.vm.provider "virtualbox" do |vb|
    vb.name = "garderie-prod"
    vb.memory = "2048"
    vb.cpus = 2
    vb.customize ["modifyvm", :id, "--cableconnected1", "on"]
  end
end
