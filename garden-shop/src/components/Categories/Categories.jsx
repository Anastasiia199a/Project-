import React, { useState, useEffect } from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../API/categories_api';

function Categories({ isShort }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((categories) => {
      if (isShort) {
        setCategories(categories.slice(0, 4));
      } else {
        setCategories(categories);
      }
    });
  }, []);

  function handleNavigate() {
    navigate('/categories');
  }

  return (
    <div className="categories">
      <div className="categories-header">
        <h2>Categories</h2>
        {isShort && (
          <button onClick={handleNavigate} className="categories-btn">
            All categories
          </button>
        )}
      </div>
      <div
        className="categories-images"
        style={{ flexWrap: isShort ? 'nowrap' : 'wrap' }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => navigate('/instruments')}
          >
            <img
              src={`http://localhost:3333/${category.image}`}
              alt={category.title}
            />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
