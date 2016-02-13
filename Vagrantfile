Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false

  # For time being, HTTP is not exposed ... the VM is used for unit testnig only
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provider "virtualbox" do |v|
     v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
     v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end

  config.vm.synced_folder ".", "/home/vagrant/carbon-fields"

  config.vm.provision "shell", inline: <<-SHELL
    DBHOST=localhost
    DBNAME=wp
    DBUSER=wp
    DBPASSWD=secret
    
    echo -e "\n--- Update apt ---\n"
    sudo apt-get -qq update

    echo -e "\n--- Install some base packages ---\n"
    sudo apt-get -y install vim curl build-essential python-software-properties git subversion zip > /dev/null 2>&1

    echo -e "\n--- Install PHP7 ---\n"
    sudo LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php
    sudo apt-get -qq update
    sudo apt-get install php7.0 php7.0-fpm php7.0-mysql -y

    echo -e "\n--- Install composer ---\n"
    sudo curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

    echo -e "\n--- Install phpUnit ---\n"
    su - vagrant -c 'sudo composer global require "phpunit/phpunit=5.0.*"'
    echo 'PATH=$PATH:~/.composer/vendor/bin/' >> ~vagrant/.bash_profile && chown vagrant:vagrant ~vagrant/.bash_profile

    echo -e "\n--- Install MySQL ---\n"
    echo "mysql-server mysql-server/root_password password $DBPASSWD" | debconf-set-selections
    echo "mysql-server mysql-server/root_password_again password $DBPASSWD" | debconf-set-selections
    sudo apt-get -y install mysql-server-5.5

    echo -e "\n--- Setup MySQL ---\n"
    mysql -uroot -p$DBPASSWD -e "CREATE DATABASE $DBNAME"
    mysql -uroot -p$DBPASSWD -e "grant all privileges on $DBNAME.* to '$DBUSER'@'localhost' identified by '$DBPASSWD'"

    su - vagrant -c "cd /home/vagrant/carbon-fields && ./tests/bin/install.sh $DBNAME $DBUSER $DBPASSWD"
    
  SHELL
end
