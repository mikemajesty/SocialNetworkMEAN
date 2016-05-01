const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var app  = express();

mongoose.connect('mongodb://localhost:27017/banco');

app.get('/', (req,res) => {
  res.sendfile('index.html');
});

app.listen('3000', () => {
    console.log("This is running in the post 3000");
});
