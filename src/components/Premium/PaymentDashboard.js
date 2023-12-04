// PaymentDashboard.js

import React from 'react';
import './PaymentDashboard.css';

const PaymentDashboard = () => {
  const validateForm = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var CVV = document.getElementById("CVV").value;

    // Check if all fields are filled out
    if (name === "" || email === "" || phone === "" || CVV === "") {
      alert("Please fill out all fields.");
      return false;
    }

    // Check if phone number is valid
    if (!(/^\d{10}$/.test(phone))) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!(/^\d{3}$/.test(CVV))) {
      alert("Please enter a valid 3 digit CVV number.");
      return false;
    }

    return true;
  };

  return (
    <div className="container">
      <h1 className="maint"></h1>
      <div className="section animated bounceInLeft">
        <div className="contact">
          <h3>Payment Dashboard</h3>
          <form action="http://localhost:3000/" method="POST" onSubmit={validateForm}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="CVV">CVV</label>
              <input type="password" name="CVV" id="CVV" required />
            </p>
            <p>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" required />
            </p>
            <select name="cars" id="cars" style={{ fontSize: '1.5rem' }}>
              <option value="999">₹999</option>
              <option value="3499">₹3499</option>
              <option value="9999">₹9999</option>
            </select>
            <p className="full">
              <button type="submit">Click here to pay</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboard;
