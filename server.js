const express = require('express')
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const QuickBase = require('quickbase'); 
const app = express();
const PORT = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const quickbase = new QuickBase({
  realm: 'primebuchholz',
  userToken: process.env.QB_USER_TOKEN,
});

//used for pug see view folder
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index',{title: 'Quick Base WDC'}));

//handeling post information
app.get('/index', urlencodedParser, function(req, res) {
  var appid = req.query.appid;
  quickbase.api('API_GetSchema', {
    dbid: appid
  }).then((results)=>{
    res.send(results);
  });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


//used for static web pages
// app.use('/', express.static(__dirname + '/public'));