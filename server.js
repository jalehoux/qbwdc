const express = require('express')
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var options = {  
    url: 'https://primebuchholz.quickbase.com/db/'+process.env.QB_TABLE_ID+'?a=API_GetSchema&usertoken='+process.env.QB_USER_TOKEN,
    method: 'GET',
    headers: {
    }
  };

// //used for pug see view folder
// app.set('view engine', 'pug');
// app.get('/', (req, res) => res.render('index',{title: 'Quick Base WDC'}));

//used for static web pages
app.use('/', express.static(__dirname + '/public'));

//handeling post information
app.post('/index', urlencodedParser, function(req, res) {
    console.log(req.body);
    var returns;
    request(options, function (error, response, body) {
        returns = body
        console.log(returns);
      });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));









//used for static web pages
// app.use('/', express.static(__dirname + '/public'));