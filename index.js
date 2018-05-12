const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const databaseUrl = require("./config/database");
const createExpressApp = require("./server/create-express-app");

mongoose.connect(databaseUrl.url, (err, db) => {
  if (err) {
    console.log("");
    console.log(err);
    return err;
  }

  console.log(`Database connected successfully ${databaseUrl.url} `);

  createExpressApp(db).listen(port, () => {
    database = db;
    console.log(`Server is running on port ${port}`);
  });
});
