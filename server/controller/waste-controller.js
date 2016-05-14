
var Wastes = require('../datasets/wastes')

module.exports.sendWaste = (req, res) => {
  var w = new Wastes(req.body);
  w.save();
  Wastes.find({}, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data)
  });
};
