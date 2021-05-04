const express = require("express");

require("dotenv");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(process.env.PORT || 8000, () =>
  console.log("server started on port 8000")
);
