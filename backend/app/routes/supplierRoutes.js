module.exports = app => {
  const controller = require("../controllers/supplierController.js");
  // routes
  app.post("/supplier/add", controller.add);
  app.post("/supplier/update/:id", controller.update);
  app.get("/supplier/delete/:id", controller.delete);
  app.get("/supplier/", controller.get);
  
};
