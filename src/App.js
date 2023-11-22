import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import DoctorCard from './components/doctor_card';
import Doctor from './components/doctor/doctor';
import Footer from './components/footer';
import Premium from './components/Premium/premium';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
