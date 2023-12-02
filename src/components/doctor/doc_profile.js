import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import './doc_profile.css'

const Profile = () => {
    // const dispach=useDispatch();
    // const handleLogout=(e)=>{
    //     e.preventDefault();
    //     // dispach(logout());
    // };

    // const user=useSelector(selectUser);
    // return(
    //     <>
    //     <h1>
    //         Welcome <span className="user__name">user.name</span>
    //     </h1>
    //     <button className="logout__button" onClick={(e)=>handleLogout(e)}></button>
    //     </>
    // )


    const userName = useSelector((state) => state.user.userName);
    console.log('UserName from Redux:', userName);

    const patients = [
        { time: '10:00 AM', id: 1, name: 'John Doe', status: 'In Progress' },
        { time: '11:30 AM', id: 2, name: 'Jane Smith', status: 'Completed' },
        // Add more patient data as needed
    ];

    return (
        <>
            {/* <div>
      <h1>Welcome, {userName}!</h1>
    </div> */}
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
                        <h1> {userName}</h1>
                        <p>email</p>
                    </div>
                    <div class="description-profile">MBBS| MD | Specialization | Available from 11 am everyday</div>
                    <ul class="data-user">
                        <li><a><strong>339</strong><span>Visits</span></a></li>
                        <li><a><strong>128</strong><span>Days</span></a></li>
                        <li><a><strong>4</strong><span>Average visits per day</span></a></li>
                    </ul>
                </div>
                {/* <%})%> */}
            </div>
            <section>
                <div class="patients">
                    <h1>TODAY'S VISITS

                    </h1>
                    <div class="search-container">
                        <form action="#">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <table id="patients">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Patient ID</th>
                                <th>Patient Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.time}</td>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </section>

        </>
    );

};

export default Profile;