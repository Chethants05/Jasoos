const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// In-memory storage for images (replace with database for production)
let images = [];

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes

// Fetch all images
app.get("/models/images.js", (req, res) => {
  res.json(images);
});

// Upload a new image
app.post("/uploads", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  const newImage = {
    _id: Date.now().toString(),
    name: req.file.originalname,
    imageUrl: `http://localhost:${PORT}/uploads/${req.file.filename}`,
  };

  images.push(newImage);
  res.json(newImage);
});

// Delete an image
app.delete("/models/images/:id", (req, res) => {
  const id = req.params.id;
  const imageIndex = images.findIndex((img) => img._id === id);

  if (imageIndex === -1) {
    return res.status(404).send("Image not found");
  }

  // Remove file from the uploads folder
  const imagePath = images[imageIndex].imageUrl.replace(`http://localhost:${PORT}/`, "");
  fs.unlink(path.join(__dirname, imagePath), (err) => {
    if (err) console.error("Error deleting file:", err);
  });

  // Remove from in-memory storage
  images.splice(imageIndex, 1);

  res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
