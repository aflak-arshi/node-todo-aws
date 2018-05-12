const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require('method-override');

const todos = require('./routes/todo');

const createExpressApp = (database) => {
  const app = express();

  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride("X-HTTP-Method-Override")); // override with the X-HTTP-Method-Override header in the request

  app.use('/todos', todos(database));
  
//   app.use("*", (req, res) => {
//     return res.sendFile(path.join(__dirname, "client/dist"));
//   });

  return app;
};

module.exports = createExpressApp;
