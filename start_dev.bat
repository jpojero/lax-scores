@echo off 

cd server
start cmd /k "npm start"
cd ..
cd app
start cmd /k "npm start"