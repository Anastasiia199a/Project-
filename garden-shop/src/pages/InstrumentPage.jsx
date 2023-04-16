import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { instruments as instrumentsArr } from '../data/instruments';

function InstrumentPage() {
  let { id: productId } = useParams();
  const product = instrumentsArr.find(
    (instrument) => instrument.id === Number(productId)
  );
  return (
    <>
      <Header />
      <div className="instrument-title">
        <h3>{product.title}</h3>
      </div>
      <div className="instrument-content">
        <div className="instrument-image">
          <img src={`/images/${product.image}`} alt={product.title} />
        </div>
        <div className="instrument-contnet">
          <p>
            <span className="new-price">{product.newPrice}</span>
            <span className="old-price">
              {product.oldPrice ? '$' : ''}
              {product.oldPrice}
            </span>
            <span className="discount">
              {product.discount}
              {product.discount ? '%' : ''}
            </span>
          </p>
          <button>В корзину</button>
          <p>Описание</p>
          <p>{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InstrumentPage;
