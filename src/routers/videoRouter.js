const express = require("express");
const videoRouter = new express.Router();

const Channel = require("../models/ChannelSchema");
const Video = require("../models/VideoSchema");

videoRouter.post("/videos", async (req, res) => {
  try {
    const addVideos = new Channel(req.body);
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
    const videos = await Video.find({}).then((response) => {
      console.log("Found all videos", response);
      res.json(response);
    });
  } catch (err) {
    res.send(err);
  }
});

videoRouter.get("/api/channels/:id", async (req, res) => {
  try {
    const channel = await Video.findById(req.params.id)
      .then((response) => {
        console.log("Found Channel", response);
        res.status(200).json(response);
      })
      .catch((err) => console.log("ERRPRR", err));
  } catch (err) {
    res.send(err);
  }
});

videoRouter.get("/api/video/:id", async (req, res) => {
  try {
    const videoId = req.params.id;

    await Video.findOne({ "creatorVideos._id": videoId }).then((response) => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).send("some Error Occurced");
  }
});

module.exports = videoRouter;
