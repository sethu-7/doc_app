import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../action/action'; // Replace with the correct path
import { useNavigate } from 'react-router-dom';
import './doc_login.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Simple password validation (customize as needed)
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      password
    );

    if (!isValidPassword) {
      setPasswordError(
        'Password should contain at least 6 characters, including a number, a capital letter, a small letter, and a special character.'
      );
      return;
    }

    // Clear password error if valid
    setPasswordError('');

    // Perform authentication logic here
    console.log(`Name: ${name}, Password: ${password}, Doctor ID: ${doctorId}, Email: ${email}`);

    // Dispatch the setUserName action with the entered name
    dispatch(setUserName(name));

    // Redirect to /doc_profile using useNavigate
    navigate('/doc_profile');
  };

  return (
    <div className="login">
      <h1>Login Here!!</h1>
      <form className="login__form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        {/* <div>
          <label>Doctor ID:</label>
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </div> */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
