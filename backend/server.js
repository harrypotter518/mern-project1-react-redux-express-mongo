const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();


const mongoose = require('mongoose');
const config = require('./app/config/db.config.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/routes/countryRoutes.js")(app);
require("./app/routes/commoTypeRoutes.js")(app);
require("./app/routes/commodityRoutes.js")(app);
require("./app/routes/supplierRoutes.js")(app);
require("./app/routes/millRoutes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


