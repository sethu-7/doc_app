import React from "react";
import {Link} from 'react-router-dom'
import './doctor.css'
import Docsearch from './doc_search'

function Doctor() {
    return (
        <>
        <Docsearch />
            
            
            <section class="ourdoc" id="ourdoc">
                <h1 class="docheading">Our doctors</h1>

                <div class="ourboxcontainer">
                    {/* <%doctorlist.forEach(function(doctor) {%> */}
                    <div class="ourbox">





                        <span>Expert Doctor</span>
                        {/* <span>Specialization:<%=doctor.specialization%></span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    <%})%> */}
                    </div>
                </div>

                <div class="ourboxcontainer">
                    <div class="ourbox">
                        {/* <img src="" alt="doc"> */}
                            <h3>john</h3>
                            <span>expert doc</span>
                            <div class="share">
                                <a href="#" class="fab fa-facebook-f"></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-instagram"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                            </div>
                    </div>
                </div> 
                <div class="ourboxcontainer">
                    <div class="ourbox">
                        {/* <img src="" alt="doc"> */}
                            <h3>john</h3>
                            <span>expert doc</span>
                            <div class="share">
                                <a href="#" class="fab fa-facebook-f"></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-instagram"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                            </div>
                    </div>
                </div> 
            </section>











            <section class="doc">
                <div class="doctor">


                    <div id="flexdoc">


                        <div class="boxdoc">


                            <h1>ARE YOU A DOCTOR?</h1>
                            <div class="boxsidedoc">Join Us Today and connect with patients around the world

                            </div>

                            <body>
                                {/* <!-- <a href="/dashboard" class="button">Join Us</a> --> */}
                                <Link to='/doc_login'>
                                <a class="button" >Join Us</a>
                                </Link>
                            </body>


                        </div>
                        {/* <!-- <div class="box">
                            <img src="/doc_heart.png" alt="doctor">
                        </div> --> */}



                    </div>
                </div>
            </section>
        </>
    );
}

export default Doctor;