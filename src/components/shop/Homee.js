import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css'
const Homee = () => {
    useEffect(() => {
        const reveal = () => {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', reveal);


        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);
    return (
        <>
            <div className='med'>

                <section className="home" >
                    <div className='container '>
                        <div className='content1'>
                            <h4>AVAILABLE EVERYWHERE</h4>
                            <h1>Delivering in 100+ cities all over India</h1>
                            <h4>From Delhi to Hyderabad,we home deliver medicines and health products all over India</h4>
                            <Link to='/Medicines' style={{ textDecoration: 'none', color: 'white' }}>
        <button>Buy medicines</button>
    </Link>
                        </div>
                        
                            <img src="/images/pic1.jpg" className='right-image'/>
                        

                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                        
                        <div className='content2'>
                            <h4>COMPREHENSIVE INFORMATION</h4>
                            <h1>Know your medicine</h1>
                            <h4>Exhaustive information about medicines written by verified medical experts</h4>
                            <Link to='/Medicines' style={{ textDecoration: 'none', color: 'white' }}>
        <button>Buy medicines</button>
    </Link>
                        </div>
                        <img src="/images/newimg.jpg " className='left-image' />
                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                        


                        <div className='content3'>
                            <h4>TRUSTED CARE</h4>
                            <h1>Genuine medicines</h1>
                            <h4>All medicines and health products are sourced from Opiherbs trusted network of verified pharmacies and medical stores</h4>
                            <Link to='/Medicines' style={{ textDecoration: 'none', color: 'white' }}>
        <button>Buy medicines</button>
    </Link>
                        </div>
                        
                        <img src="/images/pic3.jpg" width={500}  size={100} className='right-image1'/>
                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                       
                        <div className='content4'>
                            <h4>FAST HEALTH CARE</h4>
                            <h1>Reliable on time home delivery</h1>
                            <h4>Our in-house pharmacists ensure your medicines reach you when you need them</h4>
                            <Link to='/Medicines' style={{ textDecoration: 'none', color: 'white' }}>
        <button>Buy medicines</button>
    </Link>
                 </div>
                 <img src="/images/pic4.avif" width={520} className='left-image1'/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Homee;