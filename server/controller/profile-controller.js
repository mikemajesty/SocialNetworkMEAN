const User = require('../datasets/users');
const fs = require('fs-extra');
const path = require('path');


module.exports.updatePhoto = (req, res) => {
  var file = req.files.file;
  var userId = req.body.userId;

  var uploadDate = new Date().toISOString();
  uploadDate = uploadDate.replace('.','');
  uploadDate = uploadDate.replace('-','');
  uploadDate = uploadDate.replace(':','');

  const tempPath = file.path;
  const targetPath  = path.
        join(__dirname, `../../upload/${userId}${uploadDate}${file.name}`);

  fs.rename(tempPath, targetPath, (err) => {
     if (err) {
       console.log(err);
     }
     else{
       console.log('file moved');
     }
  });
};
