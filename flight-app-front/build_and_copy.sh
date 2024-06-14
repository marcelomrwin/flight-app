#!/bin/bash

ng build
rm -rf /Users/masales/Development/projects/flight-app/flight-app-back/src/main/resources/static/*
cp -r dist/flight-app-front/* /Users/masales/Development/projects/flight-app/flight-app-back/src/main/resources/static/