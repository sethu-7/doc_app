import React from 'react'

export default function DeleteOffer(props) {
  return (
    <div className="offers">
        <h2 style={{ textAlign: 'center' }}>Delete An Offer By Title</h2>
        <form id="delete-offer-form">
          <label htmlFor="title">Title:</label>
          <input className="inputcolor" type="text" id="title" name="title" required />
          <button type="submit" onClick={props.offerdeletionHandler}>Delete offer</button>
        </form>
      </div>
  )
}
