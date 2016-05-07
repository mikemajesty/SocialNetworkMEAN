const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var app  = express();

var authenticationController = require("./server/controller/authentication-controller");

mongoose.connect('mongodb://localhost:27017/banco');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo ok');
});


app.use(bodyParser.json());
app.use('/app', express.static(__dirname  + '/app'));
app.use('/node_modules',  express.static(__dirname  + '/node_modules'))


app.get('/', (req,res) => {
  res.sendfile('index.html');
});

app.post('/api/user/signup', authenticationController.signup)

app.listen('3000', () => {
    console.log("This is running in the post 3000");
});
