// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// import PremiumDocImg from '../assets/bimg2.jpg';
// import Header from './header.jsx';
// import Footer from './footer.jsx';

// import './premium.css';
// import Offers from './offers';
// import { Link } from 'react-router-dom';

// const Premium = () => {

//   const plans = [
//     { price: '₹999', duration: '1 month' },
//     { price: '₹3499', duration: '4 months' },
//     { price: '₹9999', duration: '1 year' },
//   ];

//   const features = [
//     '24/7 Services',
//     'Free medicine delivery',
//     'Routine body checkup with offers and reminders for next checkups',
//     'Free follow-up consultations',
//     'No waiting time for a consultation with a doctor',
//   ];

//   const renderPlan = (plan, index) => (
//     <div className={`table ${index === 1 ? 'premium' : index === 2 ? 'ultimate' : 'basic'}`} key={index}>
//       <div className="price-section">
//         <div className="price-area">
//           <div className="inner-area">
//             <span className="text"></span>
//             <span className="price">{plan.price}</span>
//           </div>
//         </div>
//       </div>
//       <div className="package-name"></div>
//       <ul className="features">
//         <li>
//           <span className="list-name" style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
//             Plan valid for {plan.duration}
//           </span>
//         </li>
//         {features.map((feature, i) => (
//           <li key={i}>
//             <span className="list-name">{feature}</span>
//             <span className={`icon ${index === 0 || (index === 1 && i !== 4) ? 'check' : 'cross'}`}>
//               <FontAwesomeIcon icon={index === 0 || (index === 1 && i !== 4) ? faCheck : faTimes} />
//             </span>
//           </li>
//         ))}
//       </ul>
//       <div className="btn">
//         <button style={index === 1 ? { background: '#e4dfdf' } : null}>
//           {/* <a href="/PaymentDashboard" style={{ color: '#82c6f3' }}>Purchase</a> */}
//           <Link to={"PaymentDashboard"}>Purchase</Link>
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <Header/>
//       <img src={PremiumDocImg} alt="" />
//       <header>
//         <h1>Premium</h1>
//       </header>
//       <div className="startbody">
//         <div className="wrapper">
//           {plans.map((plan, index) => renderPlan(plan, index))}
//         </div>
//       </div>
//       <br />
//       <div className="ofrs">
//         <div className="premiumbenefits">
//           <h3>BENEFITS</h3>
//           <ul>
//             <li>
//               <b>Free Consultation</b>
//               <ol>
//                 <li>Silver premium user will get one free consultation in the span of one month.</li>
//                 <li>First three Consultations for gold premium users are free.</li>
//                 <li>Diamond premium user will get one free consultation per month.</li>
//               </ol>
//             </li>
//             <li>
//               <b>Discounts</b>
//               <p>All premium members will get more discount than regular customers/patients.</p>
//             </li>
//             <li>
//               <b>Fast Delivery</b>
//               <p>Premium users will get their products delivered at home on the same day.</p>
//             </li>
//           </ul>
//         </div>
        
//       </div>

//   <Footer/>
//     </div>
//   );
// };

// export default Premium;


import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PremiumDocImg from '../../assets/bimg2.jpg';

import './premium.css';


const Premium = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* Replace the premium image source with the appropriate variable */}
      <img src={PremiumDocImg} alt="" />
      <header>
        <h1>Premium</h1>
      </header>
      <div className="startbody">
        <div className="wrapper">
          {/* Include the new React code here */}
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel component */}
          </div>




          <div className="table basic">
            <div className="price-section">
              <div className="inner-area">
                <span className="text"></span>
                <span className="price">₹999 <br /></span>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name" style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Plan valid for 1 month</span>
              </li>
              <li>
                <span className="list-name">24/7 Services</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Free medicine delivery</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Routine body checkup with offers and reminders for next checkups</span>
                <span className="icon cross"><FontAwesomeIcon icon={faTimes} /></span>
              </li>
              <li>
                <span className="list-name">Free follow-up consultations</span>
                <span className="icon cross"><FontAwesomeIcon icon={faTimes} /></span>
              </li>
              <li>
                <span className="list-name">No waiting time for a consultation with a doctor</span>
                <span className="icon cross"><FontAwesomeIcon icon={faTimes} /></span>
              </li>
            </ul>
            <div className="btn">
              <button style={{ color: '#82c6f3' }}>
              <Link to={"PaymentDashboard"}>Purchase</Link>
              </button>
            </div>
          </div>






          <div className="table premium">
            <div className="price-section">
              <div className="inner-area">
                <span className="text"></span>
                <span className="price">₹3499 <br /></span>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name" style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Plan valid for 1 month</span>
              </li>
              <li>
                <span className="list-name">24/7 Services</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Free medicine delivery</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Routine body checkup with offers and reminders for next checkups</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Free follow-up consultations</span>
                <span className="icon cross"><FontAwesomeIcon icon={faTimes} /></span>
              </li>
              <li>
                <span className="list-name">No waiting time for a consultation with a doctor</span>
                <span className="icon cross"><FontAwesomeIcon icon={faTimes} /></span>
              </li>
            </ul>
            <div className="btn">
              <button style={{ color: '#82c6f3' }}>
              <Link to={"PaymentDashboard"}>Purchase</Link>
              </button>
            </div>
          </div>




          <div className="table ultimate">
            <div className="price-section">
              <div className="inner-area">
                <span className="text"></span>
                <span className="price">₹9999 <br /></span>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name" style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Plan valid for 1 month</span>
              </li>
              <li>
                <span className="list-name">24/7 Services</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Free medicine delivery</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Routine body checkup with offers and reminders for next checkups</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">Free follow-up consultations</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
              <li>
                <span className="list-name">No waiting time for a consultation with a doctor</span>
                <span className="icon check"><FontAwesomeIcon icon={faCheck} /></span>
              </li>
            </ul>
            <div className="btn">
              <button style={{ color: '#82c6f3' }}>
              <Link to={"PaymentDashboard"}>Purchase</Link>
              </button>
            </div>
          </div>

        </div>
      </div>
      <br />
      <div className="ofrs">
         <div className="premiumbenefits">
           <h3>BENEFITS</h3>
           <ul>
             <li>
               <b>Free Consultation</b>
               <ul>
                 <li>Silver premium user will get one free consultation in the span of one month.</li>
                 <li>First three Consultations for gold premium users are free.</li>
                 <li>Diamond premium user will get one free consultation per month.</li>
               </ul>
             </li>
             <li>
               <b>Discounts</b>
               <p>All premium members will get more discount than regular customers/patients.</p>
             </li>
             <li>
               <b>Fast Delivery</b>
               <p>Premium users will get their products delivered at home on the same day.</p>
             </li>
           </ul>
         </div>
        
       </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Premium;
