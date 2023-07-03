import React, { useEffect, useState } from 'react';
import './Instruments.css';
import { getAllProducts } from '../../API/categories_api';
import InstrumentItem from './InstrumentItem';

function Instruments() {
  const [instruments, setInstruments] = useState([]);
  const [filteredInstruments, setFilteredInstruments] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [discountFilter, setDiscountFilter] = useState(false);
  const [sort, setSort] = useState('default');

  useEffect(() => {
    getAllProducts().then((products) => {
      setInstruments(products);
      setFilteredInstruments(products);
    });
  }, []);

  useEffect(() => {
    if (!from && !to) {
      setFilteredInstruments(instruments);
    } else if (from && !to) {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.discont_price >= from)
      );
    } else if (to && !from) {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.discont_price <= to)
      );
    } else {
      setFilteredInstruments(
        instruments.filter(
          (instrument) =>
            instrument.discont_price >= from && instrument.discont_price <= to
        )
      );
    }
  }, [from, to]);

  useEffect(() => {
    if (discountFilter) {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.discont_price)
      );
    } else {
      setFilteredInstruments(instruments);
    }
  }, [discountFilter]);

  useEffect(() => {
    if (sort === 'az') {
      setFilteredInstruments(
        [...instruments].sort((a, b) => (a.title > b.title ? 1 : -1))
      );
    } else if (sort === 'za') {
      setFilteredInstruments(
        [...instruments].sort((a, b) => (a.title > b.title ? -1 : 1))
      );
    } else {
      setFilteredInstruments(instruments);
    }
  }, [sort]);

  return (
    <>
      <h2 className="instruments-title">Instruments and inventory</h2>
      <div className="navigation">
        <div className="range">
          <p className="price">Price</p>
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
        <div className="instruments-discount">
          <p>Discounted products</p>
          <input
            className="checkbox-discount"
            type="checkbox"
            id="discount"
            value={discountFilter}
            onChange={(e) => setDiscountFilter(!discountFilter)}
          />
        </div>
        <div className="sort">
          <p className="sort-item">Sort:</p>
          <select
            className="select-sort"
            name="product-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="az">from A to Z</option>
            <option value="za">from Z to A</option>
          </select>
        </div>
      </div>
      <div className="instruments">
        {!filteredInstruments.length ? (
          <p>Not found</p>
        ) : (
          filteredInstruments.map((instrument) => (
            <InstrumentItem key={instrument.id} instrument={instrument} />
          ))
        )}
      </div>
    </>
  );
}

export default Instruments;
