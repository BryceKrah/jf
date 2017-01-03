'use strict'
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to EJS
app.set('view engine', 'ejs');

app.get('/*', (req, res, next)=> {
console.log("req.url",req.url);
  if (req.url.indexOf("/icon_imgs/") === 0 || req.url.indexOf("/css/") === 0) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  }
  next();
})

app.get('/', (req,res)=>{
  res.render('index')
})
app.get('/about', (req,res)=>{
  res.render('pages/about')
})
app.get('/beauty', (req,res)=>{
  res.render('pages/beauty')
})
app.get('/bridal', (req,res)=>{
  res.render('pages/bridal')
})
app.get('/contact', (req,res)=>{
  res.render('pages/contact')
})
app.get('/*', (req,res)=>{
  res.render('pages/error')
})

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, ()=>{
  console.log("listening on port: ", port);
})
