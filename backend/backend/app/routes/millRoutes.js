module.exports = app => {
  const controller = require("../controllers/millController.js");
  // routes
  app.post("/mill/add", controller.add);
  app.post("/mill/update/:id", controller.update);
  app.get("/mill/delete/:id", controller.delete);
  app.get("/mill/", controller.get);
  
};
