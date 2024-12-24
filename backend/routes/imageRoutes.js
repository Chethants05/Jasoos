const express = require("express");
const multer = require("multer");
const path = require("path");
const Image = require("../models/image");

const router = express.Router();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// GET all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Error fetching images" });
  }
});

// POST upload a new image
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      name: req.file.filename,
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Error uploading image" });
  }
});

// DELETE an image by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting image" });
  }
});

module.exports = router;
