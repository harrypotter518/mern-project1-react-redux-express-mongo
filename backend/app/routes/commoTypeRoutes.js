module.exports = app => {
  const controller = require("../controllers/commoTypeController.js");
  // routes
  app.post("/commoType/add", controller.add);
  app.post("/commoType/update/:id", controller.update);
  app.get("/commoType/delete/:id", controller.delete);
  app.get("/commoType/", controller.get);
  
};
