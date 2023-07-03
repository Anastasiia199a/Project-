import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartProducts from './CartProducts';
import { GardenContext } from '../../context/Context';
import { clearCart, savePhoneNumber } from '../../reducer/gardenReducer';
import { toast } from 'react-toastify';
import { sendOrder } from '../../API/categories_api';

const notify = () =>
  toast('Order processing! Thank you!', {
    position: 'top-center',
    type: 'default',
    theme: 'light',
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
  });

function Cart() {
  const [{ cart, totalPrice, phone }, dispatch] = useContext(GardenContext);
  console.log(phone);
  const [phoneNumber, setPhoneNumber] = useState(phone);

  function handleOnSubmit(e) {
    e.preventDefault();

    sendOrder({ phone, totalPrice }).then(() => {
      dispatch(savePhoneNumber(phone));
      notify();
      dispatch(clearCart());
    });
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Cart</h3>
      </div>
      {!cart.length ? (
        <p>No products in the cart</p>
      ) : (
        <div className="cart-content">
          <div className="cart-list">
            <div className="cart-breadcrumps">
              <p>
                <Link to="/home">Home</Link> / Cart
              </p>
              <p>
                <Link to="/instruments">Back to the shop {'>'}</Link>
              </p>
            </div>
            <CartProducts />
          </div>
          <div className="cart-info">
            <h4>Order details</h4>
            <div className="cart-info-sum">
              <p className="total-price-desc">Price</p>
              <p className="total-price">${totalPrice}</p>
            </div>
            <form onSubmit={handleOnSubmit}>
              <input
                className="phone-number"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
              />
              <button className="btn-order" type="submit">
                Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
