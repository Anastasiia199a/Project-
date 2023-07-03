import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer" id="contacts">
      <div className="contacts">
        <h2 className="contacts-title">Contacts</h2>
        <h3 className="phone">+38 096 352 67 70</h3>

        <div className="social-networks">
          <div className="instagram">
            <img src="./images/icons/insta.png" alt="instagram" />
            <p>Instagram</p>
          </div>
          <div className="whatsapp">
            <img src="./images/icons/whatsapp.png" alt="whatsapp" />
            <p>WhatsApp</p>
          </div>
        </div>
      </div>
      <div className="contacts-info">
        <h2 className="adress-title">Address</h2>
        <p className="adress">Kiyv, Khreschatyk, 73</p>
        <p className="work-schedule-title">We are working</p>
        <p className="work-schedule">Day and night</p>
      </div>
    </div>
  );
}

export default Footer;
