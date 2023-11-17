import React from 'react';
// import './App.css';
import Header from './components/header';
import DoctorCard from './components/doctor_card';
// import Footer from './components/footer';
import Doctor from './components/doctor/doctor';
import Footer from './components/footer';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Doctor />

      
      
      <DoctorCard
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
      />
      {/* Add more DoctorCard components as needed */}
      <Footer />
    </div>
  );
}

export default App;
