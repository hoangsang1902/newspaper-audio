const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minlength: [5, 'Title must be at least 5 characters long'], 
      maxlength: [50, 'Title cannot be more than 50 characters long'] 
    },

    description: {
        type: String,
        minlength: [10, 'Description must be at least 10 characters long'],
    },

    // image: {
    // data: Buffer,
    // contentType: String
    // },

    // audios: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Audio",
    // },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Library = mongoose.model("Library", librarySchema);
module.exports = Library;

