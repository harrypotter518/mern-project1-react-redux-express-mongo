module.exports = app => {
  const controller = require("../controllers/controller.js");
  // routes

   app.post("/add", controller.add);
  // app.post("/get", controller.get);
  // app.post("/geturl", controller.geturl);
  // app.post("/getstats", controller.getstats);
  // app.post("/add", controller.create);
  // app.post("/delete", controller.delete);
  
};
