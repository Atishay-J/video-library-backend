const Channels = require("../../src/models/ChannelSchema");
const Video = require("../models/VideoSchema");
const data = require("../../data");

// USE THIS TO SET INITIAL VALUES OF DATABASE

console.log("daataa \n ", data);

const initializaDatabase = () => {
  data.forEach(async (video) => {
    try {
      const apiVideo = new Video(video);
      console.log("\n api video \n", apiVideo);
      const addedVideo = await apiVideo
        .save()
        .then((response) =>
          console.log("Succesfully Saved one Video", response)
        );
    } catch (err) {
      console.log("Error while Initializing Database", err);
    }
  });
};

module.exports = initializaDatabase;
