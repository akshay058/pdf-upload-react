import React from "react";
import { useState } from "react"; // hook useState
import "./Pdf.css";

export default function Pdf() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState("");

  //handle file change event
  const handleFileChange = (e) => {
    try {
      const selectedFile = e.target.files[0];
      const fileType = selectedFile.type;
      const validTypes = ["application/pdf"]; // all type of file upload will be checked here

      // if file type is pdf then execute this....
      if (validTypes.includes(fileType)) {
        setFile(selectedFile); // setting selected file
        setError("");
        setUploadStatus("");
      }
      // if file is not pdf type then execute this...
      else {
        setFile(null);
        setError("Please select a PDF file.");
        setUploadStatus("");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  //Function to upload file when click submit button...
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // sending file to mock api server..
      try {
        const response = await fetch("http://localhost:3001/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setUploadStatus(`File uploaded successfully. Path: ${data.path}`);
        } else {
          setError("File upload failed. Please try again.");
        }
      } catch (error) {
        setError("An error occurred during file upload. Please try again.");
      }
    } else {
      setError("Please select a PDF file.");
    }
    setFile(null);
  };

  return (
    <div className="container">
      <h1 className="heading">Upload E-Bill PDF</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        {error && <p>{error}</p>}
        {/* Preview of selecting pdf file before uploading....*/}
        {file && (
          <div>
            <h2>Preview</h2>
            <object
              data={URL.createObjectURL(file)}
              type="application/pdf"
              width="100%"
              height="600px"
            >
              <p>Preview unavailable. Please download the file to view.</p>
            </object>
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
      <h2>{uploadStatus && <p>{uploadStatus}</p>}</h2>
    </div>
  );
}
