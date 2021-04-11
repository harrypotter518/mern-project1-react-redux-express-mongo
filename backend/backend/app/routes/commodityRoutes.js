module.exports = app => {
  const controller = require("../controllers/commodityController.js");
  // routes
  app.post("/commodity/add", controller.add);
  app.post("/commodity/update/:id", controller.update);
  app.get("/commodity/delete/:id", controller.delete);
  app.get("/commodity/", controller.get);
  
};
