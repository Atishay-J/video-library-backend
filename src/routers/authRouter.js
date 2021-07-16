const express = require("express");
const router = new express.Router();
const Users = require("../../src/models/usersSchema");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = Users({ username, password: hashedPassword });

    return newUser
      .save()
      .then((response) => res.status(200).send("Account created"))
      .catch((err) => res.status(500).send("some error occured"));
  } catch (err) {
    res.send(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await Users.findOne({ username: username });

    if (foundUser) {
      const authenticated = bcrypt.compare(password, foundUser.password);

      if (authenticated) {
        res.send(foundUser);
      }
    }

    res.status(404).send("Not Found");
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
