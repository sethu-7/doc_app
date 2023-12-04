


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../doctor/doc_login.css';
// import '../doctor/doc_login'


const Signup_user = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      password
    );

    if (!isValidPassword) {
      alert(
        'Password should contain at least 6 characters, including a number, a capital letter, a small letter, and a special character.'
      );
      return;
    }

    // Clear password error if valid
    setPasswordError('');

    // Email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    // Clear email error if valid
    setEmailError('');

    // Redirect to /doc_profile using useNavigate
    // navigate('/Home');
  };

  return (
    <div className='container-signin'>
      <h1 className="signup-title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label className="signup-label">Username:</label>
        <input
          type="text"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className="signup-label">Email:</label>
        <input
          type="text"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <br />
        <label className="signup-label">Password:</label>
        <input
          type="password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
        <label className="signup-label">Address:</label>
        <input
          type="text"
          className="signup-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        
        <br />
        <br />
        <button type="submit" className="signup-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup_user;