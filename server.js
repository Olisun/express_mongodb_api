// requiring dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

// initializing express 
const app = express();

const port = 8000;

// initializing bodyParser which lets express process form URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (error, database) => {
  if (error) {
    return console.log(error)
  }
  // importing routes
  require('./app/routes')(app, database);
  // starting server
  app.listen(port, () => {
    console.log(`We are live on ${port}`)
  });

})


