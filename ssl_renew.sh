#!/bin/bash

/usr/local/bin/docker-compose -f /home/circleci/docker-compose.yml run certbot renew \
&& /usr/local/bin/docker-compose -f /home/circleci/docker-compose.yml kill -s SIGHUP webserver
