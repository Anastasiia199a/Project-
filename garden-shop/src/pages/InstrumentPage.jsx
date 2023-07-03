import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getProductById } from '../API/categories_api';
import { GardenContext } from '../context/Context';
import { addToCart } from '../reducer/gardenReducer';
import { getDiscount } from '../utils/getDiscount';

function InstrumentPage() {
  let { id: productId } = useParams();
  const [, dispatch] = useContext(GardenContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId).then((product) => setProduct(product));
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div>
        <div className="instrument-title">
          <h3>{product.title}</h3>
        </div>
        <div className="instrument-content">
          <div className="instrument-image">
            <img
              src={`http://localhost:3333/${product.image}`}
              alt={product.title}
            />
          </div>
          <div className="instrument-contnet">
            <div className="prices">
              {product.discont_price && (
                <p className="new-price">{product.discont_price}</p>
              )}
              <p className={product.discont_price ? 'old-price' : 'new-price'}>
                {product.price ? '$' : ''}
                {product.price}
              </p>
              {product.discont_price && (
                <p className="discount">
                  {getDiscount(product)}
                  {getDiscount(product) ? '%' : ''}
                </p>
              )}
            </div>
            <button
              className="basket"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
            <p className="instrument-description">Description</p>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InstrumentPage;
