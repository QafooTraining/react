# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.hostname = "react.vm"
  config.vm.network :private_network, ip: "33.33.33.20"

  config.vm.box = "bento/ubuntu-14.04"

  config.vm.provider :virtualbox do |vb|
      vb.customize ["modifyvm", :id, "--cpus", `#{RbConfig::CONFIG['host_os'] =~ /darwin/ ? 'sysctl -n hw.ncpu' : 'nproc'}`.chomp]
      vb.customize ["modifyvm", :id, "--ioapic", "on"]

      vb.customize ["modifyvm", :id, "--memory", 1024]
      vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end

  config.vm.provision "ansible" do |ansible|
      ansible.inventory_path = "automation/vagrant"
      ansible.limit = "all"
      ansible.playbook = "automation/provision.yml"
      ansible.verbose = false

      if ENV['ANSIBLE_TAGS'] != nil
          puts "Setting ansible.tags=#{ENV['ANSIBLE_TAGS']}"
          ansible.tags = "#{ENV['ANSIBLE_TAGS']}"
      end
  end

  config.vm.network :forwarded_port, guest: 22, host: 22022, id: "ssh"
  config.vm.synced_folder ".", "/var/www/react.js", :nfs => true
end
