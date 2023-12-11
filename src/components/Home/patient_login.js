// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { login } from '../../action/authAction';
import { setUserName } from '../../action/action';
// import { setUserName } from '../../action/action';
import '../doctor/doc_login.css'

const Patient = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch login action with username
        dispatch(login(username));

        // Dispatch setUserName action to update the userName in the Redux state
        dispatch(setUserName(username));
    // history.push('/home');
    navigate('/user');
  };

  return (
    <div class="login-container">
  <h1 class="login-title">Login</h1>
  <form onSubmit={handleSubmit} class="login-form">
    <label class="username-label">Username:</label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      class="username-input"
    />
    <br />
    <label class="password-label">Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      class="password-input"
    />
    <br />
    <button type="submit" class="submit-button">Submit</button>
  </form>
</div>

  );
};

export default Patient;
