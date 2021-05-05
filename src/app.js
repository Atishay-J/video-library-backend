const express = require("express");
const cors = require("cors");

const app = express();
const videoRouter = require("../src/routers/videoRouter");
const userRouter = require("../src/routers/usersRouter");
const initializaDatabase = require("../src/utils/databaseInit");

require("dotenv/config");
require("./db/conn");

app.use(express.json());
app.use(cors());
app.use(videoRouter);
app.use(userRouter);

const Videos = require("../src/models/videoSchema");

// ** Use this only one to set Initial Values for database **
// initializaDatabase();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(process.env.PORT || 8000, () =>
  console.log("server started on port 8000")
);
