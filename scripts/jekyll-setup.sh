#!/bin/bash
# DO NOT run this file in your local shell
if [ ! -f /.dockerenv ]; then
  exit
fi

echo "Running Jekyll setup then entering"
sleep 2

cd /var/www/src
echo "Setting bundle gem path"
bundle config set --local path 'vendor/bundle'
echo "Installing Gems"
bundle install
echo "Installing Node Modules"
npm ci

cat /etc/motd
echo "The site is now ready for building!"
echo "Run: bundle exec jekyll build --watch --incremental to build."
