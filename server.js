'use strict'
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res)=>{
  res.send("working")
})


const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
  console.log("listening on port: ", port);
})
