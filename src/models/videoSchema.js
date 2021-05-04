const express = require("express");
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  creatorName: String,
  creatorAvatar: String,
  creatorVideos: [
    {
      videoId: String,
      videoTitle: String,
      videoDuration: String,
      videoTag: String,
    },
  ],
});

const Videos = new mongoose.model("Videos", videoSchema);

module.exports = Videos;
