import React from 'react';
import './LoginForm.css';

const LoginForm = ({ onClose }) => {
  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <div className="login-logo">IntelliShop</div>
        <h2>Create an account</h2>
        <p>Enter your email to sign up for this app</p>

        <input
          type="email"
          className="email-input"
          placeholder="email@domain.com"
        />

        <button className="email-button">Sign up with email</button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <button className="google-button">
          <i className="fab fa-google"></i> Continue with Google
        </button>

        <p className="terms-text">
          By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>

        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
