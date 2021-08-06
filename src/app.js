const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: "*" }));

const videoRouter = require("../src/routers/videoRouter");
const userRouter = require("../src/routers/usersRouter");
const authRouter = require("./routers/authRouter");
const initializaDatabase = require("../src/utils/databaseInit");

require("dotenv/config");
require("./db/conn");

app.use(express.json());
app.use(authRouter);
app.use(videoRouter);
app.use(userRouter);

// const Videos = require("../src/models/videoSchema");

// ** Use this only one to set Initial Values for database **
// initializaDatabase();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(process.env.PORT || 8000, () =>
  console.log("server started on port 8000")
);
