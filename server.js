const express = require('express')
const dotenv = require('dotenv').config();
const request = require('request');
const xml2js = require('xml2js').parseString;
const app = express()
const PORT = process.env.PORT || 3000;

const options = {  
  url: 'https://primebuchholz.quickbase.com/db/'+process.env.QB_TABLE_ID+'?a=API_GetSchema&usertoken='+process.env.QB_USER_TOKEN,
  method: 'GET',
  headers: {
  }
};

var test;
//xml return
request(options, function (error, response, body) {
  var test = body;
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index',{title: 'Quick Base WDC', message: 'Hello World!', qbresponse: test}));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


//json return
request(options, function(err, res, body) {
  let json = xml2js(body, function(err, result){
    console.log(result);
  });
});