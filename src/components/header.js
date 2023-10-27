import React from 'react';
import './header.css'

function Header() {
    return (
        <>
            

                <header>
                    <nav class="navbar">

                        <ul>
                            {/* <li><img src="/ffsdprojectopiherb.jpg" alt="opiherb" id="logo"> */}
                            
                            <li></li>
                            <li></li>



                            <li><a href="user">Home</a></li>

                            {/* <!-- <li><a href="doctor_project_final">Login/Signup</a></li>  */}
                            <li><a href="doctor_project_final">Doctors</a></li>
                            <li><a href="project_final">Medicines</a></li>

                            <li><a href="fsd">First Aid/Emergency</a></li>
                            <li><a href="index">Premium</a></li>
                            <li><a href="offers">Offers</a></li>


                        </ul>
                    </nav>
                </header>

                


            
        </>
    );
}

export default Header;
