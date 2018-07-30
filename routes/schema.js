module.exports = function(app, db) {
    const QuickBase = require('quickbase'); 
    const quickbase = new QuickBase({
        realm: 'primebuchholz',
        userToken: process.env.QB_USER_TOKEN,
      });

    app.get('/schema', (req, res) => {
        quickbase.api('API_GetSchema', {
            dbid: process.env.QB_TABLE_ID
          }).then((results)=>{
            var allTables = results.table.chdbids;
            allTables.forEach(element => {
              //make a table obj
              //make a columns obj
            });
            res.send(results);
          });
    })
};