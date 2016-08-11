'use strict'
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next)=> {
console.log("req.url",req.url);
  if (req.url.indexOf("/icon_imgs/") === 0 || req.url.indexOf("/css/") === 0) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  }
  next();
})

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, ()=>{
  console.log("listening on port: ", port);
})
