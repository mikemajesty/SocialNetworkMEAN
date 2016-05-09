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

  const savePath =  `../../upload/${userId}${uploadDate}${file.name}`
  const tempPath = file.path;
  const targetPath  = path.join(__dirname, savePath);


  fs.rename(tempPath, targetPath, (err) => {
     if (err) {
        throw err;
     }
     User.find(userId, (err, data) => {
       var user = new User(data);
       console.log('wtf', user);
       user.image = savePath;
       user.save( (e) => {
         if (e) {throw e;}

         console.log('save successful');

       });

     });
  });
};
