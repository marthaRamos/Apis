const express = require ('express');
const morgan = require('morgan');
const path = require ('path');
const app = express();


//Middlewares
app.use(morgan('dev'));
app.use(express.json());



//Routes
app.use(require('./routes/tasks.routes'));

module.exports = app;