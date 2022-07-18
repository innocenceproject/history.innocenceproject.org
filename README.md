# History of the Innocence Project

### To use this repo:
```
docker compose build               # Build the custom Docker container.
docker compose up -d               # Start it.
docker compose web /bin/bash       # Enter the container (by default at /var/www)

# Change directory to /var/www/src (outside the container this is 'web')
cd src                             
# Install Ruby dependencies and Jekyll from the Gemfile.
bundle install                     
# Build the site using jekyll, rebuilding automatically when changes are made.
# --config overrides config optons in _config.yml with the same ones in _config_dev.yml
bundle exec jekyll build --config _config.yml,_config_dev.yml --watch
```

### Checking a build from GitHub locally:

When pushing to the Develop branch the CI builds the site on GitHub using the same process that is used for the live site. But instead of the site building to the actual site, it pushes the resultant build (build artifacts) to the [gh-pages-develop](https://github.com/ten7/history.innocenceproject.org/tree/gh-pages-develop) branch on GitHub. 
Steps to check the build:
  1. Download the [zip of that branch](https://github.com/ten7/history.innocenceproject.org/archive/refs/heads/gh-pages-develop.zip) and unzip to the "site"
  2. Unzip the files inside the folder inside to the `site` folder.
    - The site build is in <zip file>/<folder that doesn't matter>/<here>
  3. Start the docker container.
  4. Do _not_ run `bundle exec jekyll build`
  5. Instead go to `history.innocenceproject.test` to see the built site.
  
### Notes: 
- Prefix all `jekyll` commands with `bundle exec` to run them. 
- Any changes made to _config.yml won't be detected by `jekyll build --watch`
 - You must Control-C the jekyll process and restart it manually to update changes to that file.
 - Files are built to /var/www/data inside the container. 
  - See docker-compose.override.example to map that folder outside the container if needed.

### Next steps:
See the [jekyll](https://jekyllrb.com/docs/) documentation for info on Jekyll.

---
### Repository setup:
```
. (This folder)       
├── db-backups        |Unused  (here if needed)
├── scripts           |Scripts (if needed)        
├── site              |Site build directory [/var/www/web]
├── web               |Jekyll source dir [/var/www/src]
│   ├── collections   |Collections dir (like posts)
│   ├── _data         |Additional data that can be used by Jekyll (is reloaded live)
│   ├── _includes     |Snippets "partials" of code that can be included in layouts and posts.
│   ├── _layouts      |Templates that wrap posts and pages.
│   ├── pages         |Pages (note: each has a permalink to prevent urls being <url>/pages/page)
│   ├── _plugins      |Optional folder for plugins
│   ├── _config.yml   |Configuration file for Jekyll
│   ├── Gemfile       |Basically composer.json, but for Ruby
│   └── Gemfile.lock  |composer.lock, but for Ruby
│                     |
├── docker-compose.yml|Settings for docker compose
├── Dockerfile        |Definitions for the custom container.
├── flight-deck.yml   |Settings for Apache & the container
└── README.md         |This file
```


```
  7777777777777777777777777777777777777777777777777777777777777777777777777
  77                                                77777777777777777777777
  77   777777777777  77777777777  777777    7777    7777              77777
  77   777777777777  77777777777  7777777   7777    7777              77777
  77       7777      7777         77777777  7777    777777777777     777777
  77       7777      7777777777   777777777 7777    77777777777     777777
  77       7777      7777777777   7777 777777777    7777777777     777777
  77       7777      7777         7777  77777777    777777777     777777
  77       7777      77777777777  7777   7777777    77777777     777777
  77       7777      77777777777  7777    777777    7777777     777777
  77                                                77777777777777777
  777777777777777777777777777777777777777777777777777777777777777777
```
