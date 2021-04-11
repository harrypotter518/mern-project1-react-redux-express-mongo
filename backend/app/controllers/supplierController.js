let Supplier = require("../models/supplierModel.js");
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
  let supplier = new Supplier(req.body);
  supplier.save()
    .then(supplier => {
      res.status(200).json({'supplier': 'supplier in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

exports.update = (req, res) => {
  let supplier = new Supplier(req.body);

  Supplier.findById(req.params.id, function(err, supplier) {
    if (!supplier)
      res.status(404).send("data is not found");
    else {
      supplier.name = req.body[2][1];
      supplier.email = req.body[3][1];
      supplier.phone = req.body[4][1];
      supplier.address = req.body[5][1];
      supplier.country = req.body[6][1];
      supplier.companyName = req.body[7][1];

      supplier.save().then(supplier => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.delete = (req, res) => {
  Supplier.findByIdAndRemove({_id: req.params.id}, function(err, supplier){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};

exports.get = (req, res) => {

  Supplier.find({}, {id:1,name:1,email:1,phone:1,address:1,country:1,companyName:1}, function(err, supplier){
    if(err){
      console.log(err);
    }
    else {
      res.json(supplier);
    }
  });
};
