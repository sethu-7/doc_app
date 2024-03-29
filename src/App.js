import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import DoctorCard from './components/doctor_card';
import Doctor from './components/doctor/doctor';
import Footer from './components/footer';

import Premium from './components/Premium/premium';
import AdminPage from './components/Admin/AdminPage'
import AdminLoginPage from './components/Admin/Admin_login';

import Offers from './components/offers/Offers'
import PaymentDashboard from './components/Premium/PaymentDashboard'

import Signup_user from './components/Home/Signup_user';

import Doctors_List from './components/doctor/doc_list';


import User from './components/Home/user'; 


import Login from './components/doctor/doc_login';
import Patient from './components/Home/patient_login';
import SignUp from './components/doctor/doc_signin';
import Profile from './components/doctor/doc_profile';
import Medicines from './components/shop/Medicines';
import Cart from './components/shop/Cart';
import Homee from './components/shop/Homee'
import OopsPage from './components/oopspage';
import GrievancesAndRedressal from './components/OurPolicies/Greivance';
import FakeJobAndFrauds from './components/OurPolicies/Fakejob';
import PrivacyPolicy from './components/OurPolicies/privacy';

import AboutUs from './components/AboutUs/aboutus';
import ContactUs from './components/ContactUs/ContactUs';

import { Provider } from 'react-redux';
import store from './app/store';
// import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import ClientOffers from './components/offers/ClientOffers';


function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // const user=useSelector(selectUser);
  return (
    <Router>
      
      <div className="App">
        <Header />
        <Provider store={store}>


        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/patient" element={<Patient />}/>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor_list" element={<Doctors_List />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/AdminLogin" element={<AdminLoginPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/PaymentDashboard" element={<PaymentDashboard />} />
          <Route path="/doc_login" element={<Login />} />
          <Route path="/doc_signin" element={<SignUp/>}/>
          <Route path="/SignUpUser" element={<Signup_user/>}/>
          <Route path="/doc_profile" element={<Profile />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/greivance" element={<GrievancesAndRedressal />} />
          <Route path="/fakejob" element={<FakeJobAndFrauds />} />
          <Route path="/oops" element={<OopsPage />} />
          <Route path="/MedHome" element={<Homee />} />
          <Route path="/Medicines" element={<Medicines cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}  // Pass setCart to Cart
          />
          <Route path="/ClientOffers" element={<ClientOffers/>}/>

          {/* <Route path="/doc_profile" element={<profile />} /> */}


        </Routes>
        </Provider>

        {/* <DoctorCard
          name="Dr. John Doe"
          specialty="Cardiologist"
          availability="Mon, Wed, Fri"
          imageSrc="doctor1.jpg"
        />
        <DoctorCard
          name="Dr. Jane Smith"
          specialty="Pediatrician"
          availability="Tue, Thu"
          imageSrc="doctor2.jpg"
        /> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
