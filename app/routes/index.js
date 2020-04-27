// importing routes from note_routes (proper for larger apps)
const noteRoutes = require('./note_routes');

// exporting function(s) to server.js
module.exports = function (app, db) {
  noteRoutes(app, db);
}
