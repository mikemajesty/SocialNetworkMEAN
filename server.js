const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multiPart = require('connect-multiparty');
const multiPartMiddleare = multiPart();

var app  = express();

var authenticationController = require("./server/controller/authentication-controller");
var profileController = require('./server/controller/profile-controller');
var wasteController = require('./server/controller/waste-controller');

mongoose.connect('mongodb://localhost:27017/banco');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo ok');
});

app.use(bodyParser.json());
app.use(multiPartMiddleare);
app.use('/app', express.static(__dirname  + '/app'));
app.use('/node_modules',  express.static(__dirname  + '/node_modules'))
app.use('/upload', express.static(__dirname  + '/upload'))

app.get('/', (req,res) => {
  res.sendfile('index.html');
});

// user
app.post('/api/user/signup', authenticationController.signup)
app.post('/api/user/login', authenticationController.login);

// profile
app.post('/api/profile/editPhoto', multiPartMiddleare, profileController.updatePhoto);
app.post('/api/profile/updateUserName', profileController.updateUserName)
app.post('/api/profile/updateBio', profileController.updateBio)

// waste
app.post('/api/waste/new', wasteController.sendWaste );
app.get('/api/waste/get',wasteController.getWastes);

app.listen('3000', () => {
    console.log("This is running in the post 3000");
});
