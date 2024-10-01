import React from 'react';
import './Button.css';

const Button = ({ label }) => {
  return (
    <button className="primary-button">{label}</button>
  );
};

export default Button;
