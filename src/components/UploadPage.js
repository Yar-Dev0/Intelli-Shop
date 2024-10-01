import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragActive(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleUploadClick = () => {
    alert(`File "${selectedFile.name}" uploaded successfully!`);
    setSelectedFile(null);
  };

  const handleCancelClick = () => {
    alert("File upload canceled.");
    setSelectedFile(null);
  };

  return (
    <section className="upload-section">
      <h2>Upload Your Image</h2>
      <div
        className={`upload-area ${isDragActive ? 'active' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="upload-content">
          {selectedFile ? (
            <>
              <p className="file-name">Selected File: {selectedFile.name}</p>
              <div className="action-buttons">
                <button className="upload-button" onClick={handleUploadClick}>
                  Upload
                </button>
                <button className="cancel-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="upload-instructions">Drag & Drop your image here</p>
              <p className="upload-or">or</p>
              <input
                type="file"
                id="fileUpload"
                className="file-input"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="upload-button">
                Browse File
              </label>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadPage;
