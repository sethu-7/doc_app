import React from 'react';
import './Offers.css'; // Import your stylesheet
import cred_image from '../../assets/cred_image.jpg';
import percentoff_image from '../../assets/percentoff_image.jpg'
import OfferCard from './OfferCard';
// import Header from './header';
// import Footer from './footer'

const Offers = (props) => {
  return (
    <div>
      {/* <Header/> */}
      <header>
        <h1>Offers</h1>
      </header>

      <div id="offerList" className="card-container">
        {/* Static content for a few cards */}
        <OfferCard
          imageSrc={cred_image}
          altText="image does not exist"
          title="Cred Offer"
          description="Get 5% off on your first payment via cred."
        />

        <OfferCard
          imageSrc={percentoff_image}
          altText="image does not exist"
          title="Paytm Offer"
          description="Get up to 10% off by paying via Paytm."
        />
      </div>

      <footer>
        {/* <Footer/> */}
      </footer>
    </div>
  );
};

export default Offers;
