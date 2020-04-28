// requiring dependencies 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// initializing express 
const app = express();

const port = 8000;

// initializing bodyParser which lets express process form URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));


// MongoClient.connect(db.url, (error, database) => {

// })

const client = new MongoClient(db.url, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("noteable").collection("notes");
  // perform actions on the collection object
  // if (error) {
  //   return console.log(error)
  // }
  // importing routes
  require('./app/routes')(app);
  // starting server
  app.listen(port, () => {
    console.log(`We are live on ${port}`)
  });
  client.close();
});

module.exports = { client }