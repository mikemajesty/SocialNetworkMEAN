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
     User.findById(userId, (err, data) => {
       var user = new User(data);
       user.image = savePath;
       user.save( (e) => {
         if (e){
           res.json({status: 500});
         }

         console.log('save successful');
         res.json({status: 200});
       });

     });
  });
};

module.exports.updateUserName = (req, res) => {
  var userName = req.body.userName;
  var userId = req.body.userId;

  User.findById(userId, (err, data) => {
    var user = new User(data);
    user.username = userName;
    user.save( (err) => {
      if(err){
        console.log('erro save', err);
        res.json({status: 500});
      }else {
        console.log('success save');
        res.json({status: 200});
      }
    });
  });
};

module.exports.updateBio = (req, res) => {
  var bio = req.body.bio;
  var userId = req.body.userId;

  User.findById(userId, (err, data) => {
    var user = new User(data);
    user.bio = bio;
    user.save( (err) => {
        if (err) {
          console.log('error bio save', err);
        }else {
          console.log('success save bio');
        }
    });
  });


};
