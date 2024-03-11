#!/bin/sh

git config --global --add safe.directory /app/dark-patterns
git pull
serve -s dist