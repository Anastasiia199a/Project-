import React, { useContext, useState } from 'react';
import './Cart.css';
import {
  deleteFromCart,
  incrementCount,
  decrementCount,
  setCount as setCountAction,
} from '../../reducer/gardenReducer';
import { GardenContext } from '../../context/Context';

function CartProductItem({ cartItem }) {
  const [count, setCount] = useState(cartItem.count);
  const [, dispatch] = useContext(GardenContext);

  function handleChange(e) {
    setCount(e.target.value);
    dispatch(setCountAction(Number(e.target.value)));
  }

  return (
    <div className="cart-item">
      <button
        onClick={() => dispatch(deleteFromCart(cartItem.id))}
        className="remove-item-icon"
      >
        x
      </button>
      <div className="cart-item-iamge">
        <img src={`/images/${cartItem.image}`} alt={cartItem.title} />
      </div>
      <div className="description">
        <p>{cartItem.description}</p>
        <div className="cart-item-count">
          <button onClick={() => dispatch(decrementCount(cartItem.id))}>
            -
          </button>
          <input type="number" value={count} onChange={handleChange} />
          <button onClick={() => dispatch(incrementCount(cartItem.id))}>
            +
          </button>
        </div>
      </div>
      <div className="cart-item-prices">
        <p className="new-price">{cartItem.newPrice}</p>
        <p className="old-price">
          {cartItem.oldPrice ? '$' : ''}
          {cartItem.oldPrice}
        </p>
      </div>
    </div>
  );
}

export default CartProductItem;
