const express = require('express');
const routes = require('./routes/api');


//setting up express app
const app = express();

app.use(require('express-request-response-logger')());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(routes);

//listening for requests on port 8000
app.listen(5000, () => {
	console.log('Terribly Tiny Tales listening on port 8000!');
});
