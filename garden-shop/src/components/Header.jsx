import React from 'react';

function Header() {
  return (
    <div class="header">
      <div class="logo">
        <img src="./images/logo.png" alt="logo" />
        <button class="catalog">Каталог</button>
      </div>
      <div class="menu-wrapper">
        <ul class="menu">
          <li>
            <a href="#category">Категории</a>
          </li>
          <li>Купоны</li>
          <li>
            <a href="#promotions">Акции</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
        <img class="cart" src="./images/icons/card.svg" alt="cart" />
      </div>
    </div>
  );
}

export default Header;
