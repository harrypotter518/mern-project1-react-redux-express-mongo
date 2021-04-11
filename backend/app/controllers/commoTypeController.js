let CommoType = require("../models/commoTypeModel.js");
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
  console.log("asdasd------------------------------------");
  req.body.id=new Date()+ Math.floor(Math.random() * 999).toString();
  console.log(req.body.id);
  let commoType = new CommoType(req.body);
  commoType.save()
    .then(commoType => {
      res.status(200).json({'commoType': 'commoType in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

exports.update = (req, res) => {
  let commoType = new CommoType(req.body);

  CommoType.findById(req.params.id, function(err, commoType) {
    if (!commoType)
      res.status(404).send("data is not found");
    else {
      commoType.commoType = req.body[2][1];

      commoType.save().then(commoType => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.delete = (req, res) => {
  CommoType.findByIdAndRemove({_id: req.params.id}, function(err, commoType){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};

exports.get = (req, res) => {

  CommoType.find({}, {coType:1,id:1}, function(err, commoType){
    if(err){
      console.log(err);
    }
    else {
      res.json(commoType);
    }
  });
};
