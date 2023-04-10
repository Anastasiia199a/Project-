import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div class="categories">
      <div class="categories-header">
        <h2>Категории</h2>
        <button class="categories-btn">Все категории</button>
      </div>
      <div class="categories-images">
        <div class="category-item">
          <img src="./images/img_1.png" alt="Удобрения" />
          <p>Удобрения</p>
        </div>
        <div class="category-item">
          <img src="./images/img_2.png" alt="Средства Защиты и септики" />
          <p>Средства Защиты и септики</p>
        </div>
        <div class="category-item">
          <img src="./images/img_3.png" alt="Посадочный материал" />
          <p>Посадочный материал</p>
        </div>
        <div class="category-item">
          <img src="./images/img_4.png" alt="Инструменты и Инвентарь" />
          <p>Инструменты и Инвентарь</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
