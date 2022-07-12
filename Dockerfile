FROM ten7/flightdeck-web-8.0

USER root

RUN apk update
RUN apk add --no-cache make ruby ruby-dev ruby-dbg gcc build-base nodejs

WORKDIR /var/www/
RUN gem install bundler

USER apache
RUN bundle config set --local path 'vendor/bundle'
