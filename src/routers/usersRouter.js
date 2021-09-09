const express = require("express");
const router = new express.Router();
const Users = require("../../src/models/usersSchema");

router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await Users.findById(id).then(console.log("Users found"));
    res.send(findUser);
  } catch (err) {
    res.send(err);
  }
});

router.post("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { $push: req.body },
      { new: true }
    );
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
