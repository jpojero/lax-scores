# Lax scores web app

## Project Structure

| Path | Directory | Description | 
| - | - | - |
| / | Root | Project source |
| /app/build | App built| React compiled React |
| /app/public | App public | React public files |
| /app/src | App source | React source |
| /server | Server | Server files |

## Setup & Installation 

#### Install Node.js (runtime + package manager)
Download and install [Node.js + npm](https://nodejs.org/en/)

#### Install Express
```bash
# cd server(if in root)
npm install express --save 
```
#### Install dependencies  
There are 2 package files in the __root__ and __app__ folders. 

Install dependencies for both! 

#### App development mode
```bash
# cd server (if in root)
# terminal 1: electron dev mode
npm start
```
```bash
# cd app (if in root)
# terminal 2: react dev server
npm start
```

** Or just run start_dev.bat **

## Server
\*\* Must be in __root__ folder! \*\*

#### Server environment variables
| Env Var      | Example         | Description                         |
|--------------|-----------------|-------------------------------------|
| PORT         | PORT=9000       | Server port for http |
