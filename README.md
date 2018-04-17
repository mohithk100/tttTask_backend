# tttTask_backend
This project was done as a part of internship application at Terribly Tiny Tales. The project fetches a text file from
[http://terriblytinytales.com/test.txt](http://terriblytinytales.com/test.txt) and after the user has entered the a number N
in the input space provided, it shows a table containing N most frequently used words in the text along with their frequencies.
This repository deals with the backend of the project and the frontend can be found at
[tttTask_frontend (https://github.com/mohithk100/tttTask_frontend)](https://github.com/mohithk100/tttTask_frontend).

The project is live and has been hosted in heroku. You can follow this [link](https://ttttask.herokuapp.com/) to visit the live
project.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

1. Clone the repository.
   ```
   $ git clone https://github.com/mohithk100/tttTask_frontend
   ```
   
2. Install all the dependencies.
   ```
   $ cd tttTask_frontend
   $ npm install
   ```

3. Running the development server
   ```
   $ node index.js
   or 
   $ ./node_modules/.bin/nodemon index
   ```
   
## Prerequisites
The following technologies should be installed on the system before starting with the development.
* [Nodejs](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

## Built With
* [React JS](https://reactjs.org/) (Frontend)
* [Node JS/Express Framework](https://nodejs.org/en/) (Backend)
* [Materialize CSS](http://materializecss.com/) (Css Library for frontend)
* [Axios](https://github.com/axios/axios) (for handling HHTP requests)
* [Heorku](https://www.heroku.com/) (for deploying the project)

## Understanding the project
The project is built on expressjs framework which runs on noejs. The following steps show the workflow of the backend services:
1. The server listens for request and as soon as it gets a request it logs the request on the console. The request body comprises of 
a json object with a key value pair mentioning the number of words required by the user.
2. Axios Library is used for fetching the text file fom the url and after it is fetched the file is parsed into a string.
3. Then all the escape charachters form the string are removed and the string is broken into words using space as a delimiter.
The frequecy of words is then calculated and sorted in descending order.
4. The first N words with highest frequency are then converted to json object and sent as response to the request and the reponse as reponse
status are logged in the console.


## Deploying the project
The project is deployed currently under heroku. The complete instructions can be found [here](https://devcenter.heroku.com/articles/deploying-nodejs).
The following instructions briefly mention the process.

1. Create a free Heroku account and install [Heroku CLI.](https://devcenter.heroku.com/articles/heroku-cli)
2. Specify the version of node in your package.json.
   ```
   "engines": {
    "node": "4.1.1"
    },
   ```
3. Create a Procfile and add the following instructions inside the Procfile.
   ```
   $ touch Procfile
   ```
   Add the following lines in your Procfile.
   ```
   web: node index.js
   ```
 4. Deploy the application by running the following commands.
    ```
    $ git add .
    $ git commit -m "Added a Procfile."
    $ heroku login
    $ heroku create
    $ git push heroku master
    ```
 5. Visit the live project in your browser.
   ```
   $ heroku open
   ```
