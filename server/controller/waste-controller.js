
var Wastes = require('../datasets/wastes')

module.exports.sendWaste = (req, res) => {
  new Wastes(req.body).save();

};
