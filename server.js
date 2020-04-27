// requiring dependencies 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initializing express 
const app = express();

const port = 8000;

// initializing bodyParser which lets express process form URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log(`We are live on ${port}`)
});

