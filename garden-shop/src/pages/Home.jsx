import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories';
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <>
      <section class="header-wrapper">
        <Header />
        <div class="banner">
          <div class="info">
            <h1>Распродажа</h1>
            <h2>в честь нового сезона</h2>
            <div class="actions">
              <button class="all">Все акции</button>
              <button class="additional">Подробнее</button>
            </div>
          </div>
          <div class="image">
            <img src="./images/flowers.png" alt="flowers" />
          </div>
        </div>
      </section>

      <section id="category" class="category-wrapper">
        <Categories isShort={true} />
        <div class="advertising">
          <div class="advertising-image">
            <img src="./images/dwarf.png" alt="dwarf" />
          </div>
          <div class="advertising-info">
            <h1>Скидка 5%</h1>
            <h2>на первый заказ</h2>
            <input type="text" placeholder="+380" />
            <button>Получить скидку</button>
          </div>
        </div>
      </section>

      <section id="shares" class="shares-wrapper">
        <div class="shares-header">
          <h2>Акции</h2>
        </div>
        <div class="shares-images">
          <div class="shares-item">
            <img src="./images/home_01.png" alt="bridge" />
            <p>
              <span class="new-price">1450$</span>
              <span class="old-price">1540$</span>
              <span class="discount">-7%</span>
            </p>
            <p>Мостик декоративный кованый</p>
          </div>
          <div class="shares-item">
            <img src="./images/home_2.png" alt="flowers" />
            <p>
              <span class="new-price">150$</span>
              <span class="old-price">170$</span>
              <span class="discount">-7%</span>
            </p>
            <p>Корзина с цветами</p>
          </div>
          <div class="shares-item">
            <img src="./images/home_3.png" alt="castle" />
            <p>
              <span class="new-price">50$</span>
              <span class="old-price">71$</span>
              <span class="discount">-7%</span>
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
