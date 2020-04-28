module.exports = (app, db) => {

  // create route
  app.post('/notes', (req, res) => {
    // creating the note
    const note = {
      text: req.body.body,
      title: req.body.title
    };

    db.collection('notes').insert(note, (error, result) => {
      if (error) {
        res.send({ 'error': 'An error has occured' });
      } else {
        // send the result back which is an array containing the first element (the note that was just created)
        res.send(result.ops[0])
      }
    })
  })
}

