import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories';
import { toast } from 'react-toastify';
import { savePhoneNumber as savePhoneNumberAction } from '../reducer/gardenReducer';
import { GardenContext } from '../context/Context';
import { sendSale } from '../API/categories_api';

const notify = () =>
  toast(`📱 added sale`, {
    position: 'top-right',
    type: 'default',
    theme: 'light',
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
  });

function Home() {
  const [, dispatch] = useContext(GardenContext);
  const [phone, setPhone] = useState('');

  function savePhoneNumber() {
    sendSale({ phone }).then(() => {
      dispatch(savePhoneNumberAction(phone));
      notify();
      setPhone('');
    });
  }

  return (
    <>
      <section className="header-wrapper">
        <Header />
        <div className="banner">
          <div className="info">
            <h1>Sale</h1>
            <h2>in the new season</h2>
            <div className="actions">
              <button className="all">All promotions</button>
              <button className="additional">More</button>
            </div>
          </div>
          <div className="image">
            <img src="./images/flowers.png" alt="flowers" />
          </div>
        </div>
      </section>

      <section id="category" className="category-wrapper">
        <Categories isShort={true} />
        <div className="advertising">
          <div className="advertising-image">
            <img src="./images/dwarf.png" alt="dwarf" />
          </div>
          <div className="advertising-info" id="kupons">
            <h1>Sale 5%</h1>
            <h2>for the first order</h2>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="+380"
            />
            <button onClick={savePhoneNumber}>Get a discount</button>
          </div>
        </div>
      </section>

      <section id="shares" className="shares-wrapper">
        <div className="shares-header">
          <h2>Sales</h2>
        </div>
        <div className="shares-images">
          <div className="shares-item">
            <img src="./images/home_01.png" alt="bridge" />
            <p>
              <span className="new-price">1450$</span>
              <span className="old-price">1540$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Decorative forged bridge</p>
          </div>
          <div className="shares-item">
            <img src="./images/home_2.png" alt="flowers" />
            <p>
              <span className="new-price">150$</span>
              <span className="old-price">170$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Bascet with flowers</p>
          </div>
          <div className="shares-item">
            <img src="./images/home_3.png" alt="castle" />
            <p>
              <span className="new-price">50$</span>
              <span className="old-price">71$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Aquarium palace</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
