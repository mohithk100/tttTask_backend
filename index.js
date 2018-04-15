const express = require('express');
const routes = require('./routes/api');

const PORT = process.env.PORT || 5000;


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
app.listen(PORT, () => {
	console.log(`Terribly Tiny Tales listening on ${PORT}`);
});
