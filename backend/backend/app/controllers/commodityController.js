let Commodity = require("../models/commodityModel.js");
const resCallback = (res, err, data, defaultErrMessage = null) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found 'Url'`
      });
    } else {
      res.status(500).send({
        message:
          defaultErrMessage || err.message || "Internal server error"
      });
    }
  } else {
    res.send(data);
  }
};

// Create and Save a new Url
exports.add = (req, res) => {
  
  req.body.id=new Date()+ Math.floor(Math.random() * 999).toString();
  console.log(req.body.id);
  let commodity = new Commodity(req.body);
  commodity.save()
    .then(commodity => {
      res.status(200).json({'commodity': 'commodity in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

exports.update = (req, res) => {
  let commodity = new Commodity(req.body);

  Commodity.findById(req.params.id, function(err,commodity ) {
    if (!commodity)
      res.status(404).send("data is not found");
    else {
      commodity.coType = req.body[2][1];
      commodity.coName = req.body[3][1];

      commodity.save().then(commodity => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.delete = (req, res) => {
  Commodity.findByIdAndRemove({_id: req.params.id}, function(err, commodity){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};

exports.get = (req, res) => {

  Commodity.find({}, {coType:1,coName:1,id:1}, function(err, commodity){
    if(err){
      console.log(err);
    }
    else {
      res.json(commodity);
    }
  });
};
