const express = require("express");
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  isUserSubscribed: false,
  creatorName: String,
  creatorAvatar: String,
  creatorVideos: [
    {
      videoId: String,
      videoTitle: String,
      videoDuration: String,
      videoTag: String,
      creatorName: String,
      creatorAvatar: String,
    },
  ],
});

const Video = new mongoose.model("Video", videoSchema);

module.exports = Video;
