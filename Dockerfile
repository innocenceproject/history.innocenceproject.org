FROM ten7/flightdeck-web-8.0

USER root

RUN apk update
RUN apk add --no-cache make ruby ruby-dev ruby-dbg gcc build-base nodejs
ADD --chown=apache:apache ./scripts/.bashrc /var/www/

ADD ./scripts/jekyll-setup.sh /usr/local/bin/

WORKDIR /var/www
RUN gem install bundler

USER apache
WORKDIR /var/www
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["docker-cmd.sh", "/usr/sbin/httpd", "-D", "FOREGROUND", "-f", "/etc/apache2/httpd.conf"]
