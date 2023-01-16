import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';

import './Items.css';

import CardList from '../components/CardList';
import ItemCard from '../components/ItemCard';

const Items = () => {
  const [isFilterMenuVisible, setIsFilterMenuVisible] = React.useState(false);
  const currentSet = useSelector((state) => state.currentSet);
  const allItems = useSelector((state) => state.allItems);
  const actualList = allItems.filter(
    (item) => item.type === currentSet.currentType
  );
  console.log(actualList);

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
              {Array.from(new Set(actualList.map((item) => item.color)))
                .sort()
                .map((color) => (
                  <li className='items-filter__item' key={Math.random()}>
                    {color}
                    <input type='checkbox' />
                  </li>
                ))}
            </ul>
          </li>
          <li className='items-filter__group-item'>
            <span className='items-filter__group-name'>Size</span>
            <ul className='items-filter__group items-filter__group_borderless'>
              {Array.from(new Set(actualList.map((item) => item.size)))
                .sort()
                .map((size) => (
                  <li className='items-filter__item' key={Math.random()}>
                    {size}

                    <input type='checkbox' />
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
      <CardList>
        {actualList.map((item) => (
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
