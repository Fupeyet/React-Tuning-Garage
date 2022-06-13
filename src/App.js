import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ItemBlock from './components/ItemBlock';

import items from './assets/parts.json';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <ItemBlock {...obj} />
              // title={obj.title}
              // price={obj.price}
              // image={obj.imageUrl}
              // types={obj.types}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
