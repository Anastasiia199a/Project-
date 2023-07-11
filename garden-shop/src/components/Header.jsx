import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <img
          onClick={() => navigate('/home')}
          src="./images/logo.png"
          alt="logo"
        />
        <button onClick={() => navigate(`/instruments`)} className="catalog">
          Cataloge
        </button>
      </div>
      <div className="menu-wrapper">
        <ul className="menu">
          <li>
            <a href="#category">Categoties</a>
          </li>
          <li>
            <a href="#kupons">Coupons</a>
          </li>
          <li>
            <a href="#shares">Shares</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <Link to="/cart">
          <img className="cart" src="./images/icons/card.svg" alt="cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
