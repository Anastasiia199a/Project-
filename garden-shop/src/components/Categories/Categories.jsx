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
    <div class="categories">
      <div class="categories-header">
        <h2>Категории</h2>
        {isShort && (
          <button onClick={handleNavigate} class="categories-btn">
            Все категории
          </button>
        )}
      </div>
      <div class="categories-images">
        {categories.map((category) => (
          <div key={category.id} class="category-item">
            <img src={`/images/${category.image}`} alt={category.title} />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
