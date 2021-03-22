const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("combined"));


//routes
require('./app/routes/')(app);

module.exports = app;