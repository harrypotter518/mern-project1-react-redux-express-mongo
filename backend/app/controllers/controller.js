const Url = require("../models/model.js");

let Country = require("../models/model.js");
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
  console.log("add....");
  let country = new Country(req.body);
  country.save()
    .then(country => {
      res.status(200).json({'country': 'country in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

// Create and Save a new Url
exports.geturl = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  // Save Url in the database
  Url.getUrlByCode(req.body, (err, data) => resCallback(res, err, data, "Some error occurred while getting the 'Url'."));
};

// Create and Save a new Url
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  // Save Url in the database
  Url.create(req.body, (err, data) => resCallback(res, err, data, "Some error occurred while creating the 'Url'."));
};

// Create and Save a new Url
exports.getstats = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  // Save Url in the database
  Url.getstats(req.body, (err, data) => resCallback(res, err, data, "Some error occurred while getting the 'Url'."));
};


// // Delete a Url with the specified UrlId in the request
// exports.delete = (req, res) => {
//   Url.remove(req.body.id, (err, data) => resCallback(res, err, data, "Could not delete 'Url' with UrlId " + req.body.id));
// };
