import React from "react";
import './doc_search.css';

function Docsearch() {
    return (
        <>
            <section class="image">
                <div class="container-image">
                    <h1 id="heading">FIND YOUR NEAREST DOCTOR NOW</h1>
                    

                    {/* <form action="doctor_list" style="padding-right: 650px ;"> */}
                        {/* <i class="fas fa-search" aria-hidden="true"></i>  */}
                        <input class="search" type="text" id="Spec" name="Spec"
                            placeholder="Search for specializations or district"/>
                    {/* </form> */}



                </div>

                <div class="consult">
                    <h2>Consult with the Best Doctors Around the world</h2>
                    <p>Starting at ₹199</p>
                    <div id="flex" onscroll="handleScroll()">
                        <div class="box">
                            {/* <img src="https://img.freepik.com/premium-vector/vector-illustration-cardiologist-white-coat-with-heart-his-hands-profession_87693-1659.jpg" */}
                                {/* alt="doctor"> */}
                        </div>

                        <div class="box">


                            <div class="boxside">Talk within 30 min</div>
                            <div class="boxside">First consultation entirely free!</div>
                            <div class="boxside">Get a valid prescription</div>

                        </div>



                    </div>
                </div>

            </section>

        </>
    );
}

export default Docsearch;