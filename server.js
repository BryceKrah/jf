'use strict'
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
  console.log("listening on port: ", port);
})
