import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './doc_profile.css';

const Profile = () => {
    const userName = useSelector((state) => state.user.userName);

    // Initialize state for patients
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', status: 'Pending', timeslot: '10:00 AM' },
        { id: 2, name: 'Jane Smith', status: 'Confirmed', timeslot: '11:30 AM' },
        { id: 3, name: 'Bob Johnson', status: 'Pending', timeslot: '02:15 PM' },
        { id: 4, name: 'Alice Williams', status: 'Cancelled', timeslot: '03:45 PM' },
    ]);

    const handleAccept = (id) => {
        // Update the status to 'Confirmed'
        const updatedPatients = patients.map(patient =>
            patient.id === id ? { ...patient, status: 'Confirmed' } : patient
        );
        setPatients(updatedPatients);
        console.log(`Accepted appointment with ID: ${id}`);
    };

    const handleDecline = (id) => {
        // Update the status to 'Postponed'
        const updatedPatients = patients.map(patient =>
            patient.id === id ? { ...patient, status: 'Postponed' } : patient
        );
        setPatients(updatedPatients);
        console.log(`Postponed appointment with ID: ${id}`);
    };


    return (
        <>
        <div>
            {/* <h1>Welcome, {userName}!</h1> */}
            {/* Other content of the profile page */}
        </div>
        <div class="content-profile-page">
        {/* <%per.forEach(function(docper){%> */}
        <div class="profile-user-page card">
            <div class="img-user-profile">
                <img class="profile-bgHome" src="https://i.pinimg.com/564x/7f/6a/47/7f6a47acb64c3fc67bc03c1125a33eba.jpg" />
                <img class="avatar"
                    src="https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg"
                    alt="jofpin" />
            </div>
            <div class="user-profile-data">
                <h1>{userName}</h1>
                {/* <p>email</p> */}
            </div>
            <div class="description-profile">MBBS| MD | Ophthalmologist | Available from 11 a.m everyday</div>
            <ul class="data-user">
                <li><a><strong>339</strong><span>Visits</span></a></li>
                <li><a><strong>128</strong><span>Days</span></a></li>
                <li><a><strong>4</strong><span>Average visits per day</span></a></li>
            </ul>
        </div>
        {/* <%})%> */}
    </div>
    <br>
    </br>
    <br>
    </br>

    <div className="patients">
                <h1>TODAY'S VISITS</h1>
                <table id="patients">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Time</th>
                            <th>Patient Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.timeslot}</td>
                                <td>{patient.name}</td>
                                <td>{patient.status}</td>
                                <td>
                                    <button className="accept-btn" onClick={() => handleAccept(patient.id)}>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button className="decline-btn" onClick={() => handleDecline(patient.id)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Profile;