// DeleteOffer.js

import React from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function DeleteOffer(props) {
  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Delete An Offer By Title</h2>
      <form id="delete-offer-form">
        <label htmlFor="title">Title:</label>
        <input className={styles.inputcolor} type="text" id="title" name="title" required />
        <button type="submit" onClick={props.offerdeletionHandler}>Delete offer</button>
      </form>
    </div>
  );
}
