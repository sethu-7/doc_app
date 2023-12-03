import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../action/authAction';
import { setUserName } from '../../action/action';
import './doc_signin.css';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [doctorId, setDoctorId] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
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

    // Dispatch signUp action with user details
    dispatch(signUp(username));
    dispatch(setUserName(username));

    // Redirect to /doc_profile using useNavigate
    navigate('/doc_profile');
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
        <label className="signup-label">Specialization:</label>
        <input
          type="text"
          className="signup-input"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <br />
        <label className="signup-label">Doctor ID:</label>
        <input
          type="text"
          className="signup-input"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        />
        <br />
        {/* <label className="signup-label">First Name:</label>
    <input
      type="text"
      className="signup-input"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <br />
    <label className="signup-label">Last Name:</label>
    <input
      type="text"
      className="signup-input"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    <br /> */}
        <br />
        <button type="submit" className="signup-button">
          Submit
        </button>
      </form>
    </div>

  );
};

export default SignUp;
