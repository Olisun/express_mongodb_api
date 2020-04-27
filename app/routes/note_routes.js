module.exports = (app, db) => {
  // create route
  app.post('/notes', (req, res) => {
    // TODO create note
    console.log(req.body);
    res.send('Hello');
  })
}