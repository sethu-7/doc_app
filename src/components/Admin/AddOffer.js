// AddOffer.js

import React from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function AddOffer(props) {
  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Add New Offer</h2>
      <form action="/offers" method="POST">
        <label htmlFor="image">Image URL:</label>
        <input className={styles.inputcolor} type="text" id="image" name="image" required />
        <label htmlFor="title">Title:</label>
        <input className={styles.inputcolor} type="text" id="title" name="title" required />
        <label htmlFor="description">Description:</label>
        <textarea className={styles.inputcolor} id="description" name="description" required></textarea>
        <button type="submit" onClick={props.offerAdditionHandler}>Submit</button>
      </form>
    </div>
  );
}
