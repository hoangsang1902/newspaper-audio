// controllers/audioController.js
const Library = require("../model/Library");

// Get all audios
exports.getLibrarys = async (req, res) => {
  try {
    const librarys = await Library.find();
    res.json(librarys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new library
exports.createLibrary = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const library = new Library({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newLibrary = await library.save();
    res.status(201).json(newLibrary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an library
exports.updateLibrary = async (req, res) => {
  try {
    const library = await Library.findById(req.params.id);
    if (!library) {
      return res.status(404).json({ message: "Library not found" });
    }

    library.title = req.body.title;
    library.description = req.body.description;
    const updateLibrary = await library.save();
    res.json(updateLibrary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an library
exports.deleteLibrary = async (req, res) => {
  try {
    const library = await Library.findById(req.params.id);
    if (!library) {
      return res.status(404).json({ message: "Library not found" });
    }

    await library.deleteOne();
    res.json({ message: "Library deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
