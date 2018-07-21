module.exports = function(app, db) {
    app.get('/data', (req, res) => {
        quickbase.api('API_DoQuery', {
            dbid: process.env.QB_USER_TOKEN,
            qid: 1,
            clist: 'a',
        }).then((results)=>{
            res.send(results);
        });
    })  
};