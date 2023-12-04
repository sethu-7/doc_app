import React from 'react'

export default function DeleteMedicine(props) {
  return (
    <div className="offers">
        <h2 style={{ textAlign: 'center' }}>Delete A Medicine By its Name</h2>
        <form id="delete-med-form">
          <label htmlFor="name">Name:</label>
          <input className="inputcolor" type="text" id="name" name="name" required  />
          <button type="submit" onClick={props.medicinedeletionHandler}>Delete medicine</button>
        </form>
      </div>
  )
}
