const express = require('express')
const dotenv = require('dotenv').config();
const request = require('request');
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

request('https://primebuchholz.quickbase.com/db/'+process.env.QB_TABLE_ID+'?a=API_GetSchema&usertoken='+process.env.QB_USER_TOKEN, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});