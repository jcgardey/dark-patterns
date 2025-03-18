#!/bin/sh

docker build -t jcgardey/dark-patterns-front . --no-cache
docker push jcgardey/dark-patterns-front
