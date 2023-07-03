import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GardenContext } from '../../context/Context';
import { addToCart } from '../../reducer/gardenReducer';
import { toast } from 'react-toastify';
import { getDiscount } from '../../utils/getDiscount';

const notify = (instrumentName) =>
  toast(`${instrumentName} added to cart`, {
    position: 'top-right',
    type: 'success',
    theme: 'light',
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
  });

function InstrumentItem({ instrument }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();
  const [, dispatch] = useContext(GardenContext);

  function handleAddToCart() {
    dispatch(addToCart(instrument));
    notify(instrument.title);
  }

  return (
    <div
      key={instrument.id}
      className="instrument-item"
      onMouseMove={() => setIsButtonVisible(true)}
      onMouseOut={() => setIsButtonVisible(false)}
    >
      <div className="instrument-image">
        <img
          src={`http://localhost:3333/${instrument.image}`}
          alt={instrument.title}
          onClick={() => navigate(`/instrument/${instrument.id}`)}
        />
        <button
          style={{ display: isButtonVisible ? 'block' : 'none' }}
          onClick={handleAddToCart}
          className="add-to-cart"
        >
          Добавить в корзину
        </button>
      </div>
      <p>
        {instrument.discont_price && (
          <span className="new-price">
            {instrument.discont_price ? '$' : ''}
            {instrument.discont_price}
          </span>
        )}
        <span className={instrument.discont_price ? 'old-price' : 'new-price'}>
          {instrument.price ? '$' : ''}
          {instrument.price}
        </span>
        {instrument.discont_price && (
          <span className="discount">
            {getDiscount(instrument)}
            {getDiscount(instrument) ? '%' : ''}
          </span>
        )}
      </p>
      <p>{instrument.title}</p>
    </div>
  );
}

export default InstrumentItem;
