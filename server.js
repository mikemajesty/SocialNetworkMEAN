const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var app  = express();

mongoose.connect('mongodb://localhost:27017/banco');

app.use('/app', express.static(__dirname  + '/app'));
app.use('/node_modules',  express.static(__dirname  + '/node_modules'))


app.get('/', (req,res) => {
  res.sendfile('index.html');
});

app.post('/api/user/signup', authenticationController.signup)

app.listen('3000', () => {
    console.log("This is running in the post 3000");
});
