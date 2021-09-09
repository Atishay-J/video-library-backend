const mongoose = require("mongoose");
const express = require("express");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedVideos: {
    type: [
      {
        videoId: String,
        channelId: String,
      },
    ],
    default: [],
  },
  playlist: {
    type: [
      {
        playlistName: {
          type: String,
          required: true,
        },
        videoId: {
          type: String,
          required: true,
        },
        channelId: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
  subscribed: {
    type: [
      {
        channelId: String,
      },
    ],
    default: [],
  },
  history: {
    type: [
      {
        videoId: String,
        channelId: String,
      },
    ],
    default: [],
  },
});

const Users = new mongoose.model("Users", UserSchema);

module.exports = Users;
