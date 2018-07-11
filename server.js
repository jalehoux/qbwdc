const express = require('express')
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

//used for pug see view folder
// app.set('view engine', 'pug');
// app.get('/', (req, res) => res.render('index',{title: 'Quick Base WDC'}));

//used for static web pages
app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
