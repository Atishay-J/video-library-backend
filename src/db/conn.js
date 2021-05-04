const mongoose = require("mongoose");

const URI = process.env.DB_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Succesfull"))
  .catch((err) => console.log("Error connecting to Db \n \n", err));
