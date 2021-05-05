const express = require("express");
const videoRouter = new express.Router();

const Videos = require("../../src/models/videoSchema");

videoRouter.post("/Videos", async (req, res) => {
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

videoRouter.get("/api/videos", async (req, res) => {
  try {
    const videos = await Videos.find({}).then(console.log("Found all videos"));
    res.send(videos);
  } catch (err) {
    res.send(err);
  }
});

videoRouter.get("/api/channels/:id", async (req, res) => {
  try {
    const channel = await Videos.findById(req.params.id).then(
      console.log("Found Channel")
    );
    res.send(channel);
  } catch (err) {
    res.send(err);
  }
});

module.exports = videoRouter;
