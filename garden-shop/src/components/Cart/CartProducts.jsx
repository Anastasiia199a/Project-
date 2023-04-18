import React, { useContext } from 'react';
import './Cart.css';
import CartProductItem from './CartProductItem';
import { GardenContext } from '../../context/Context';

function CartProducts({ cartList }) {
  const [{ cart }] = useContext(GardenContext);

  return cart.map((cartItem) => (
    <CartProductItem key={cartItem.id} cartItem={cartItem} />
  ));
}

export default CartProducts;
