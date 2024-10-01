import React, { useState } from 'react';
import './Generate.css';

const GeneratePage = () => {
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleEnterClick = () => {
    if (prompt.trim() === '') {
      alert('Please enter a prompt');
    } else {
      alert(`Prompt entered: "${prompt}"`);
    }
    setPrompt('');
  };

  return (
    <div className="generate-container">
      <div className="card">
        <h2>Generate Your Prompt</h2>
        <div className="input-container">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            className="prompt-input"
            placeholder="Enter your prompt here..."
          />
          <button className="enter-button" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
