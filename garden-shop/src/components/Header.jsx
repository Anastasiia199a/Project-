import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/home');
  }

  return (
    <div className="header">
      <div className="logo" onClick={handleNavigate}>
        <img src="./images/logo.png" alt="logo" />
        <button className="catalog">Каталог</button>
      </div>
      <div className="menu-wrapper">
        <ul className="menu">
          <li>
            <a href="#category">Категории</a>
          </li>
          <li>
            <a href="#kupons">Купоны</a>
          </li>
          <li>
            <a href="#shares">Акции</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
        <img className="cart" src="./images/icons/card.svg" alt="cart" />
      </div>
    </div>
  );
}

export default Header;
