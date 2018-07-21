const schemaRoute = require('./schema');
const dataRoute = require('./data');

module.exports = function(app, db){
  schemaRoute(app, db);  
  dataRoute(app, db);
};