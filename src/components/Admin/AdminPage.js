import React, { useState } from 'react';
import './AdminPage.css';
// import Header from './header';
// import Footer from './footer';
import AddOffer from './AddOffer';
import DeleteOffer from './DeleteOffer';
import AddMedicine from './AddMedicine';
import DeleteMedicine from './DeleteMedicine';
import RemoveDoctor from './RemoveDoctor';

const AdminPage = () => {
  const [offerdeletion,setOfferDeletion]=useState(false);
  const [medicinedeletion,setMedicineDeletion]=useState(false);
  const [removeDoctor,setRemoveDoctor]=useState(false);
  const [offerAddition,setOfferAddition]=useState(false);
  const [medicineAddition,setMedicineAddition]=useState(false);
  const offerdeletionHandler=()=>{
setOfferDeletion(true);
  }
  const medicinedeletionHandler=()=>{
    setMedicineDeletion(true);
  }
  const doctorRemovigHandler=()=>{
    setRemoveDoctor(true);
  }
  const offerAdditionHandler=()=>{
    setOfferAddition(true);
     }
  const medicineAdditionHandler=()=>{
    setMedicineAddition(true);
  }
  return (
    <>
    {/* <div><Header/></div> */}
    <div className="container">
      
      <h1>Admin Page</h1>

      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>555-1234</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane.smith@example.com</td>
              <td>555-5678</td>
            </tr>
          </tbody>
        </table>
       <RemoveDoctor doctorRemovigHandler={doctorRemovigHandler}/>
       {removeDoctor && <p style={{color:'red'}}>Doctor Removed</p>}
      </div>
      <AddOffer offerAdditionHandler={offerAdditionHandler}/>
      {offerAddition&&<p>Offer addition successful.</p>}
      <DeleteOffer offerdeletionHandler={offerdeletionHandler}/>
    
      {offerdeletion && <p style={{color:'red'}}>Offer deletion successful</p>}
     <AddMedicine medicineAdditionHandler={medicineAdditionHandler}/>
     {medicineAddition &&<p>Medicine addition successful.</p>}
      <DeleteMedicine medicinedeletionHandler={medicinedeletionHandler}/>
      {medicinedeletion &&<p style={{color:'red'}}>Medicine deletion successful</p>}
    </div>
    {/* <div><footer><Footer/></footer></div> */}
    </>
  );
};
export default AdminPage;
