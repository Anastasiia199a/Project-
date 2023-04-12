import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories';
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="header-wrapper">
        <Header />
        <div className="banner">
          <div className="info">
            <h1>Распродажа</h1>
            <h2>в честь нового сезона</h2>
            <div className="actions">
              <button className="all">Все акции</button>
              <button className="additional">Подробнее</button>
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
          <div className="advertising-info">
            <h1>Скидка 5%</h1>
            <h2>на первый заказ</h2>
            <input type="text" placeholder="+380" />
            <button>Получить скидку</button>
          </div>
        </div>
      </section>

      <section id="shares" className="shares-wrapper">
        <div className="shares-header">
          <h2>Акции</h2>
        </div>
        <div className="shares-images">
          <div className="shares-item">
            <img src="./images/home_01.png" alt="bridge" />
            <p>
              <span className="new-price">1450$</span>
              <span className="old-price">1540$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Мостик декоративный кованый</p>
          </div>
          <div className="shares-item">
            <img src="./images/home_2.png" alt="flowers" />
            <p>
              <span className="new-price">150$</span>
              <span className="old-price">170$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Корзина с цветами</p>
          </div>
          <div className="shares-item">
            <img src="./images/home_3.png" alt="castle" />
            <p>
              <span className="new-price">50$</span>
              <span className="old-price">71$</span>
              <span className="discount">-7%</span>
            </p>
            <p>Замок для аквариума</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
