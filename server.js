const express = require('express')
const dotenv = require('dotenv').config;
const request = require('request');
const app = express()

app.get('/', (req, res) => res.send('test'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

request('https://swapi.co/api/people/1', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});