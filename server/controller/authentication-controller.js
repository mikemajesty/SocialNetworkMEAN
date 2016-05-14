const User = require('../datasets/users');

module.exports.signup = (req, res) => {
  var user  = new User(req.body);
  user.save();
  res.json(req.body);
};

module.exports.login = (req, res) => {
  User.find(req.body, (err, data) => {

    if (err) {
      console.log('error login:', err);
    }

    if (data.length > 0) {
      res.json({
        email: req.body.email,
        _id: data[0]._id,
        username: data[0].username,
        image: data[0].image
        });
      }

  });
};
