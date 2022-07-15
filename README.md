# History of the Innocence Project

### To use this repo:
```
docker compose build               # Build the custom Docker container.
docker compose up -d               # Start it.
docker compose web /bin/bash       # Enter the container (by default at /var/www)

cd src                             # Change directory to /var/www/src (outside the container this is 'web')
bundle install                     # Install Ruby dependencies and Jekyll from the Gemfile.
bundle exec jekyll build --watch   # Build the site using jekyll, rebuilding automatically when changes are made.
```

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
├── web               |Jekyll source dir
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
