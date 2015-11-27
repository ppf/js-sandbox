# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.provider "virtualbox" do |v|
    v.name = "linux_villy64"
    v.gui = false
    v.memory = 1024
    v.cpus = 1
  end

  config.vm.box = "villy64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 3000, host: 3000

end
