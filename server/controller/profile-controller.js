const User = require('../datasets/users');
const fs = require('fs-extra');
const path = require('path');


module.exports.updatePhoto = (req, res) => {
  var file = req.files.file;
  var userId = req.body.userId;

  res.json({file: file});
};
