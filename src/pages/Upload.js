import React from 'react';
import UploadPage from '../components/UploadPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Upload = () => {
  return (
    <div className="upload-page-container">
    <Navbar />
      <UploadPage />
      <Footer />
    </div>
  );
};

export default Upload;
