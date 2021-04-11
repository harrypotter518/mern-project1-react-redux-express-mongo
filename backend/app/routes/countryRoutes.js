module.exports = app => {
  const controller = require("../controllers/countryController.js");
  // routes
  app.post("/country/add", controller.add);
  app.post("/country/update/:id", controller.update);
  app.get("/country/delete/:id", controller.delete);
  app.get("/country/", controller.get);
  
};
