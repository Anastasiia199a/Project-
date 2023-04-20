import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GardenContext } from '../../context/Context';
import { addToCart } from '../../reducer/gardenReducer';
import { toast } from 'react-toastify';

const notify = (instrumentName) =>
  toast(`${instrumentName} успешно добавлены в корзину`, {
    position: 'top-right',
    type: 'success',
    theme: 'light',
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true
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
          src={`/images/${instrument.image}`}
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
        <span className="new-price">{instrument.newPrice}</span>
        <span className="old-price">
          {instrument.oldPrice ? '$' : ''}
          {instrument.oldPrice}
        </span>
        <span className="discount">
          {instrument.discount}
          {instrument.discount ? '%' : ''}
        </span>
      </p>
      <p>{instrument.title}</p>
    </div>
  );
}

export default InstrumentItem;
