const express = require("express");
const multer = require("multer"); // to handle multi-part form data, make file uploading easier...
const cors = require("cors"); // for cross-origin access...
const app = express();
const port = 3001;
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.use(express.json());

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (file) {
    // Saving file in uploads folder and sending response back....
    const filePath = `uploads/${file.filename}`;

    // Delay response time to mimic error...
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

app.listen(port, () => {
  console.log("Mock API server is running on port 3001");
});
