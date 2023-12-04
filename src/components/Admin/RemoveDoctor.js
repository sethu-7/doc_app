import React from 'react'

export default function RemoveDoctor(props) {
  return (
    <div>
    <form action="" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <input className="inputcolor"
        type="email"
        name="email"
        id="email"
        placeholder="Enter email of doctor to delete"
        style={{ height: '40px', width: '300px' }}
      />
      <br/>
      <button className="remove-button" onClick={props.doctorRemovigHandler} >Remove</button>
    </form>
  </div>
  )
}
