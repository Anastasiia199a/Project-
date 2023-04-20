import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartProducts from './CartProducts';
import { GardenContext } from '../../context/Context';

function Cart() {
  const [{ totalPrice }] = useContext(GardenContext);
  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Корзина</h3>
      </div>
      <div className="cart-breadcrumps">
        <div className="breadcrumps">
          <p>
            <Link to="/home">Главная</Link> / Корзина
          </p>
          <p>
            <Link to="/instruments">Вернуться в магазин {'>'}</Link>
          </p>
        </div>
      </div>
      <div className="cart-content">
        <div className="cart-list">
          <CartProducts />
        </div>
        <div className="cart-info">
          <h4>Детали заказа</h4>
          <div className="cart-info-sum">
            <p>Cумма</p>
            <p>{totalPrice}</p>
            <form onSubmit={handleOnSubmit}>
              <input className='phone-number' type="number" placeholder="Ваш номер телефона" />
              <button className='btn-order' type="submit">Заказать</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
