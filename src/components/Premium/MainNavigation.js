import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Premium from './premium'



export default function MainNavigation() {
  const [statehandler,setStatehandler]=useState(true);
  const clickHandler=()=>{
    setStatehandler(false);
  }
  return (
    <>
     <ul>
        <li>
          <Link to="/Premium" onClick={clickHandler}>Premium</Link>
          </li>
        <li>
         <Link to="/AdminPage" onClick={clickHandler}>AdminPage</Link>
        </li>
        <li>
         <Link to="/Offers" onClick={clickHandler}>Offers</Link>
        </li>
     </ul>
    {statehandler && <Premium />} 
    </>
  )
}
