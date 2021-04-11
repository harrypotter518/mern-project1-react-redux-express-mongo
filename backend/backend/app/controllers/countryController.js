let Country = require("../models/countryModel.js");
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
  let country = new Country(req.body);
  country.save()
    .then(country => {
      res.status(200).json({'country': 'country in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

exports.update = (req, res) => {
  let country = new Country(req.body);

  Country.findById(req.params.id, function(err, country) {
    if (!country)
      res.status(404).send("data is not found");
    else {
      country.countryName = req.body[2][1];
      country.countryCurrency = req.body[3][1];

      country.save().then(country => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.delete = (req, res) => {
  Country.findByIdAndRemove({_id: req.params.id}, function(err, country){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};

exports.get = (req, res) => {

  Country.find({}, {countryName:1,countryCurrency:1,id:1}, function(err, country){
    if(err){
      console.log(err);
    }
    else {
      res.json(country);
    }
  });
};
