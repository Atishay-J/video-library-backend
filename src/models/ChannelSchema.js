const express = require("express");
const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  creatorName: String,
  creatorAvatar: String,
  creatorVideos: [],
});

const Channels = new mongoose.model("Channels", channelSchema);

module.exports = Channels;
