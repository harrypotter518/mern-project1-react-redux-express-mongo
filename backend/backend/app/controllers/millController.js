let Mill = require("../models/millModel.js");
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
  let mill = new Mill(req.body);
  mill.save()
    .then(mill => {
      res.status(200).json({'mill': 'mill in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

exports.update = (req, res) => {
  let mill = new Mill(req.body);

  Mill.findById(req.params.id, function(err, mill) {
    if (!mill)
      res.status(404).send("data is not found");
    else {
      mill.millName = req.body[2][1];
      mill.location = req.body[3][1];
      mill.country = req.body[4][1];

      mill.save().then(mill => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.delete = (req, res) => {
  Mill.findByIdAndRemove({_id: req.params.id}, function(err, mill){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};

exports.get = (req, res) => {

  Mill.find({}, {id:1,millName:1,location:1,country:1}, function(err, mill){
    if(err){
      console.log(err);
    }
    else {
      res.json(mill);
    }
  });
};
