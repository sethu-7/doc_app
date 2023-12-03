import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer">

                <div>
                    <h4>Know us</h4>
                    <li><a href="aboutus">About</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="">Business</a></li>
                    <li><a href="partnership">Partnership</a></li>
                    <li><a href="admin_password_validation">Admin</a></li>
                    <li><Link to="/doc_login">Doctor Login</Link></li>

                </div>
                <div>
                    <h4>Our Policies</h4>
                    <li><a href="privacy">Privacy Policy</a></li>
                    <li><a href="grievance">Grievance Redressal</a></li>
                    <li><a href="fraud">Fake jobs and Frauds</a></li>
                </div>
                <div>
                    <h4>Our Services</h4>
                    <li><a href="medicines">Order Medicines</a></li>
                    <li><Link to="/doctor">Consut a Doctor</Link></li>
                    <li><a href="">Articles</a></li>
                </div>
                <div>
                    <h4>Connect with Us</h4>
                    <li>

                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} /><Link to="/oops">Facebook</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} /> <Link to="/oops">Twitter</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} /> <Link to="/oops">Instagram</Link>
                        </a>
                    </li>
                    <li>
                        
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} /> <Link to="/oops">LinkedIn</Link>
                        </a>
                    </li>

                        


                </div>


            </div>
        </footer>
    );
}

export default Footer;
