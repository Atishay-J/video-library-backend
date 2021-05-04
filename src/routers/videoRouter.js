const express = require("express");
const router = new express.Router();

const Videos = require("../../src/models/videoSchema");

router.post("/Videos", async (req, res) => {
  try {
    const addVideos = new Videos(req.body);
    const insertedVideo = await addVideos
      .save()
      .then(console.log("Data saved to Db"));
    res.send(insertedVideo);
  } catch (err) {
    res.send(err);
  }
});

router.get("/api/videos", async (req, res) => {
  try {
    const videos = await Videos.find({}).then(console.log("Found all videos"));
    res.send(videos);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
