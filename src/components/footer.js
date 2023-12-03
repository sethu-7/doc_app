import React from 'react';
import {Link} from 'react-router-dom'; 
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
    <li><a href="doctor_project_final">Consult a Doctor</a></li>
    <li><a href="">Articles</a></li>
</div>
<div>
    <h4>Connect with Us</h4>
    <li>

        <a href="#" class="fab fa-facebook-f"> facebook</a>
    </li>
    <li>

        <a href="#" class="fab fa-twitter"> twitter</a>
    </li>
    <li>

        <a href="#" class="fab fa-instagram"> instagram</a>
    </li>


</div>


</div>
    </footer>
  );
}

export default Footer;
