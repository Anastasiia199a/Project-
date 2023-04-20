import React, { useEffect, useState } from 'react';
import './Instruments.css';
import { instruments as instrumentsArr } from '../../data/instruments';
import InstrumentItem from './InstrumentItem';

function Instruments() {
  const [instruments, setInstruments] = useState(instrumentsArr);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [discountFilter, setDiscountFilter] = useState(false);
  const [sort, setSort] = useState('default');

  useEffect(() => {
    if (!from && !to) {
      setInstruments(instrumentsArr);
    } else if (from && !to) {
      setInstruments(
        instrumentsArr.filter((instrument) => instrument.newPrice >= from)
      );
    } else if (to && !from) {
      setInstruments(
        instrumentsArr.filter((instrument) => instrument.newPrice <= to)
      );
    } else {
      setInstruments(
        instrumentsArr.filter(
          (instrument) =>
            instrument.newPrice >= from && instrument.newPrice <= to
        )
      );
    }
  }, [from, to]);

  useEffect(() => {
    if (discountFilter) {
      setInstruments(
        instrumentsArr.filter((instrument) => instrument.discount)
      );
    } else {
      setInstruments(instrumentsArr);
    }
  }, [discountFilter]);

  useEffect(() => {
    if (sort === 'az') {
      setInstruments(
        [...instrumentsArr].sort((a, b) => (a.title > b.title ? 1 : -1))
      );
    } else if (sort === 'za') {
      setInstruments(
        [...instrumentsArr].sort((a, b) => (a.title > b.title ? -1 : 1))
      );
    } else {
      setInstruments(instrumentsArr);
    }
  }, [sort]);

  return (
    <>
      <h2>Инструменты и инвентарь</h2>
      <div className="navigation">
        <div className="range">
          <p className="price">Цена</p>
          <input
            className="navigation-from"
            type="text"
            placeholder="от"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            className="navigation-to"
            type="text"
            placeholder="до"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="discount">
          <label htmlFor="discount">Товары со скидкой</label>
          <input
            className="checkbox-discount"
            type="checkbox"
            id="discount"
            value={discountFilter}
            onChange={(e) => setDiscountFilter(!discountFilter)}
          />
          <p className="sort-item">Сортировать:</p>
        </div>
        <div className="sort">
          <select
            name="product-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">по умолчанию</option>
            <option value="az">от А до Я</option>
            <option value="za">от Я до А</option>
          </select>
        </div>
      </div>
      <div className="instruments">
        {!instruments.length ? (
          <p>Не найдено ни одного товара по вашему критерию</p>
        ) : (
          instruments.map((instrument) => (
            <InstrumentItem key={instrument.id} instrument={instrument} />
          ))
        )}
      </div>
    </>
  );
}

export default Instruments;
