const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.use(express.json());

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (file) {
    // Save the file information or perform any necessary processing
    // Here, we are simply responding with the file path and success status
    const filePath = `uploads/${file.filename}`;

    // Simulate a delay to mimic server processing
    setTimeout(() => {
      res.json({
        success: true,
        message: "File uploaded successfully.",
        path: filePath,
      });
    }, 2000);
  } else {
    res.status(400).json({ success: false, message: "No file received." });
  }
});

app.listen(3001, () => {
  console.log("Mock API server is running");
});
