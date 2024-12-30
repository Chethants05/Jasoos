const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const Image = require("./models/image");
require("./database");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Multer configuration for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes

// Fetch all images
app.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Error fetching images" });
  }
});

// Upload a new image
app.post("/images/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  try {
    const newImage = new Image({
      name: req.body.name || req.file.originalname,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      description: req.body.description || "",
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Error saving image" });
  }
});

// Delete an image
app.delete("/images/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const image = await Image.findByIdAndDelete(id);
    if (!image) {
      return res.status(404).send("Image not found");
    }
    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting image" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
