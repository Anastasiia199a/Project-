import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { instruments as instrumentsArr } from '../data/instruments';
import { GardenContext } from '../context/Context';
import { addToCart } from '../reducer/gardenReducer';

function InstrumentPage() {
  let { id: productId } = useParams();
  const [, dispatch] = useContext(GardenContext);
  const product = instrumentsArr.find(
    (instrument) => instrument.id === Number(productId)
  );
  return (
    <div>
      <Header />
      <div>
        <div className="instrument-title">
          <h3>{product.title}</h3>
        </div>
        <div className="instrument-content">
          <div className="instrument-image">
            <img src={`/images/${product.image}`} alt={product.title} />
          </div>
          <div className="instrument-contnet">
            <div className="prices">
              <p className="new-price">{product.newPrice}</p>
              <p className="old-price">
                {product.oldPrice ? '$' : ''}
                {product.oldPrice}
              </p>
              <p className="discount">
                {product.discount}
                {product.discount ? '%' : ''}
              </p>
            </div>
            <button
              className="basket"
              onClick={() => dispatch(addToCart(product))}
            >
              В корзину
            </button>
            <p className="instrument-description">Описание</p>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InstrumentPage;
