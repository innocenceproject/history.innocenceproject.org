PS1="\u@flightdeck-web-8.0:\w$ "
export PATH=$PATH:/var/www/.composer/vendor/bin:/var/www/.npm-global/bin
export COMPOSER_MEMORY_LIMIT='-1'
bash -c jekyll-setup.sh
cd /var/www/src
# Prevent ansible from changing the last line of the file
return
