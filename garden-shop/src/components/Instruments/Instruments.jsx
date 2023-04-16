import React, { useState } from 'react';
import './Instruments.css';
import { instruments as instrumentsArr } from '../../data/instruments';

function Instruments() {
  const [instruments, setInstruments] = useState(instrumentsArr);

  return (
    <>
      <h2>Инструменты и инвентарь</h2>
      <div className="navigation">
        <div className="range">
          <p>Цена</p>
          <input type="text" placeholder="от" />
          <input type="text" placeholder="до" />
        </div>
        <div className="discount">
          <label htmlFor="discount">Товары со скидкой</label>
          <input type="checkbox" id="discount" />
        </div>
        <div className="sort">
          <select name="product-sort">
            <option selected>по умолчанию</option>
            <option>от А до Я</option>
            <option>от Я до А</option>
          </select>
        </div>
      </div>
      <div className="instruments">
        {instruments.map((instrument) => (
          <div className="instrument-item">
            <img src={`/images/${instrument.image}`} alt={instrument.title} />
            <p>
              <span className="new-price">{instrument.newPrice}</span>
              <span className="old-price">{instrument.oldPrice}</span>
              <span className="discount">{instrument.discount}</span>
            </p>
            <p>{instrument.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Instruments;
