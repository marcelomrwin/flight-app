#!/bin/bash

echo Cleanning dist
rm -rf ./dist
echo Cleanning cache
npm cache clean --force
echo Building the project
ng build
echo Removing files from the destination folder
rm -rf /Users/masales/Development/projects/flight-app/flight-app-back/src/main/resources/static/*
echo Copying new files
cp -r dist/flight-app-front/* /Users/masales/Development/projects/flight-app/flight-app-back/src/main/resources/static/
