import React from 'react';

import './Items.css';

import CardList from '../components/CardList';
import { allItemsTemp } from '../utils/constants';
import ItemCard from '../components/ItemCard';

const Items = () => {
  const [isFilterMenuVisible, setIsFilterMenuVisible] = React.useState(false);

  const tempItemTypeValue = 'shoes';

  const handleFilterMenuClick = () => {
    setIsFilterMenuVisible((prevValue) => !prevValue);
  };

  return (
    <section className='items'>
      <div className={`items-filter ${isFilterMenuVisible ? 'visible' : ''}`}>
        <button
          className='items-filter__menu-button'
          onClick={handleFilterMenuClick}
        >
          Filter
        </button>
        <ul className='items-filter__group'>
          <li className='items-filter__group-item'>
            <span className='items-filter__group-name'>Color</span>
            <ul className='items-filter__group items-filter__group_borderless'>
              <li className='items-filter__item'>
                Green
                <input type='checkbox' />
              </li>

              <li className='items-filter__item'>
                Red
                <input type='checkbox' />
              </li>
            </ul>
          </li>
          <li className='items-filter__group-item'>
            <span className='items-filter__group-name'>Size</span>
            <ul className='items-filter__group items-filter__group_borderless'>
              <li className='items-filter__item'>
                XXL
                <input type='checkbox' />
              </li>

              <li className='items-filter__item'>
                S
                <input type='checkbox' />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <CardList>
        {allItemsTemp.map((item) => (
          <ItemCard
            type={item.type}
            brand={item.brand}
            color={item.color}
            size={item.size}
            key={item.id}
          />
        ))}
      </CardList>
    </section>
  );
};

export default Items;
