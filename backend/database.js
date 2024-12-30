const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb+srv://admin:admin@cluster0.dgjbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/imageDB";

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();

module.exports = mongoose;
