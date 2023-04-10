import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div class="footer" id="contacts">
      <div class="contacts">
        <h2 class="contacts-title">Контакты</h2>
        <h3 class="phone">+38 096 352 67 70</h3>

        <div class="social-networks">
          <div class="instagram">
            <img src="./images/icons/insta.png" alt="instagram" />
            <p>Instagram</p>
          </div>
          <div class="whatsapp">
            <img src="./images/icons/whatsapp.png" alt="whatsapp" />
            <p>WhatsApp</p>
          </div>
        </div>
      </div>
      <div class="contacts-info">
        <h2 class="adress-title">Адрес</h2>
        <p class="adress">г. Киев, ул. Крещатик, 73</p>
        <p class="work-schedule-title">Режим работы</p>
        <p class="work-schedule">Круглосуточно</p>
      </div>
    </div>
  );
}

export default Footer;
