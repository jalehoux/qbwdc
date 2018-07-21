const express = require('express')
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
require('./routes/index')(app, {});

app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
