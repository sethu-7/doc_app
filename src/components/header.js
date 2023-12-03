import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <>
            

                <header>
                    <nav class="navbar">

                        <ul>
                            {/* <li><img src="/ffsdprojectopiherb.jpg" alt="opiherb" id="logo"> */}
                            <button className="navbar-toggler">&#9776;</button>
                            
                            <li></li>
                            <li></li>



                            <li><a href="user">Home</a></li>

                            {/* <!-- <li><a href="doctor_project_final">Login/Signup</a></li>  */}
                            <li><Link to="/doctor">Doctors</Link></li>
                            <li><a href="project_final">Medicines</a></li>

                            <li><a href="fsd">First Aid/Emergency</a></li>
                            <li><Link to="/premium">Premium</Link></li>
                            <li><a href="offers">Offers</a></li>
                            <li><Link to="#">Login</Link></li>


                        </ul>
                    </nav>
                </header>

                


            
        </>
    );
}

export default Header;
