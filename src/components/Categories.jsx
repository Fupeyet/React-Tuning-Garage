import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Всё', 'Двигатель', 'Подвеска', 'Салон', 'Выхлоп', 'Колеса'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
