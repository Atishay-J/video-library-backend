const Videos = require("../../src/models/videoSchema");
const data = require("../../data");

// USE THIS TO SET INITIAL VALUES OF DATABASE

const initializaDatabase = () => {
  data.forEach(async (video) => {
    try {
      const apiVideo = new Videos(video);
      const addedVideo = await apiVideo
        .save()
        .then(console.log("Succesfully Saved one Video"));
    } catch (err) {
      console.log("Error while Initializing Database");
    }
  });
};

module.exports = initializaDatabase;
