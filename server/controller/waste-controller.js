
var Wastes = require('../datasets/wastes')

module.exports.sendWaste = (req, res) => {
  var w = new Wastes(req.body);
  w.save();
  console.log(w);
  Wastes.find({}).sort({date: -1}).exec((err, data) => {
         if (err){
          throw res.error(err);
         }
          res.json(data);

     });
};

module.exports.getWastes = (req, res) => {
  Wastes.find({}).sort({date: -1})
    .exec( (err, data) => {
      if (err) {
        throw res.error(err);
      }
      res.json(data);

    });
};
