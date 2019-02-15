#!/bin/bash

docker pull lifealicious/programmer-dot-sh:latest
docker-compose stop programmer-dot-sh && docker-compose up -d programmer-dot-sh && docker-compose ps
