import React from 'react'

export default function AddMedicine(props) {
  return (
    <div className="offers">
    <h2 style={{ textAlign: 'center' }}>Add New Medicine</h2>
    <form action="/medicines" method="POST">
      <label htmlFor="image">Image URL:</label>
      <input className="inputcolor" type="text" id="image" name="image" required />
      <label htmlFor="name">Name:</label>
      <input className="inputcolor" type="text" id="name" name="name" required />
      <label htmlFor="m_id">Id:</label>
      <input className="inputcolor" type="text" id="m_id" name="m_id" required />
      <label htmlFor="description">Description:</label>
      <textarea className="inputcolor" id="description" name="description" required></textarea>
      <button type="submit" onClick={props.medicineAdditionHandler}>Submit</button>
     
    </form>
  </div>
  )
}
