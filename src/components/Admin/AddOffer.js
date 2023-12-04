import React from 'react'

export default function AddOffer(props) {
  return (
    <div className="offers">
        <h2 style={{ textAlign: 'center' }}>Add New Offer</h2>
        <form action="/offers" method="POST">
          <label htmlFor="image">Image URL:</label>
          <input className="inputcolor" type="text" id="image" name="image" required />
          <label htmlFor="title">Title:</label>
          <input className="inputcolor" type="text" id="title" name="title" required />
          <label htmlFor="description">Description:</label>
          <textarea className="inputcolor" id="description" name="description" required></textarea>
          <button type="submit" onClick={props.offerAdditionHandler}>Submit</button>
        </form>
      </div>
  )
}
