import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/home');
  }

  return (
    <div class="header">
      <div class="logo" onClick={handleNavigate}>
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
