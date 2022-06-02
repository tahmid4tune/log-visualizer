# log-visualizer
This application is my solution for [Log watching](https://codedamn.com/learn/web-development-interview/intermediate/log-watching-browserstack.c-XORCIinR1_WrgK4__5L) problem at [Codedamn](https://codedamn.com/)

## What it does?
- A server side program to monitor the given log file and capable of streaming updates that happen in it. This will run on the same machine as the log file.

A web based client (accessible via URL) that prints the updates in the file as and when they happen and NOT upon page refresh. The page should be loaded once and it should keep getting updated in real-time. The user sees the last 10 lines in the file when he lands on the page.

## How to run?
- After downloading the project go to the root directory of it. 
- Run following command: yarn start

## How to test?
- Go to following URL: http://localhost:3000
- Find the file named log.txt inside of following path: PROJECT_ROOT_DIRECTORY/public/log.txt
- Edit the file and save to see immediate updates appearing in the browser
