import React, { useState, useEffect } from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';
import { categories as categoriesArr } from '../../data/categories';

function Categories({ isShort }) {
  const [categories, setCategories] = useState(categoriesArr);
  const navigate = useNavigate();

  useEffect(() => {
    if (isShort) {
      setCategories(categories.slice(0, 4));
    }
  }, []);

  function handleNavigate() {
    navigate('/categories');
  }

  return (
    <div className="categories">
      <div className="categories-header">
        <h2>Категории</h2>
        {isShort && (
          <button onClick={handleNavigate} className="categories-btn">
            Все категории
          </button>
        )}
      </div>
      <div className="categories-images">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => navigate('/instruments')}
          >
            <img src={`/images/${category.image}`} alt={category.title} />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
