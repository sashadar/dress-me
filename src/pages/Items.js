import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';

import './Items.css';

import CardList from '../components/CardList';
import ItemCard from '../components/ItemCard';
import CheckBox from '../components/CheckBox';

const Items = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFilterMenuVisible, setIsFilterMenuVisible] = React.useState(false);
  const currentSet = useSelector((state) => state.currentSet);
  const allItems = useSelector((state) => state.allItems);
  const currentList = allItems
    .filter((item) => item.type === currentSet.currentType)
    .filter((item) => currentSet.filterStates[item.size])
    .filter((item) => currentSet.filterStates[item.color]);

  const uniqueSizeList = useSelector(
    (state) => state.currentSet.sizeCheckboxes
  );
  const uniqueColorList = useSelector(
    (state) => state.currentSet.colorCheckboxes
  );

  const handleFilterMenuClick = () => {
    setIsFilterMenuVisible((prevValue) => !prevValue);
  };
  //debugger;

  const addItemToSet = (id, type) => {
    const item = currentList.find((item) => item.id === id);
    console.log(item);
    if (type === 'shoes') {
      dispatch(currentSetActions.addShoes(item));
    } else if (type === 'pants') {
      dispatch(currentSetActions.addPants(item));
    } else if (type === 'shirt') {
      dispatch(currentSetActions.addShirt(item));
    }
    dispatch(currentSetActions.resetCurrentType());
    history.push('/home');
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
              {uniqueColorList.map((color) => (
                <CheckBox
                  className='items-filter__item'
                  key={Math.random()}
                  value={color}
                />
              ))}
            </ul>
          </li>
          <li className='items-filter__group-item'>
            <span className='items-filter__group-name'>Size</span>
            <ul className='items-filter__group items-filter__group_borderless'>
              {uniqueSizeList.map((size) => (
                <CheckBox
                  className='items-filter__item'
                  key={Math.random()}
                  value={size}
                />
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <CardList>
        {currentList.map((item) => (
          <ItemCard
            type={item.type}
            brand={item.brand}
            color={item.color}
            size={item.size}
            key={item.id}
            id={item.id}
            handleItemCardClick={addItemToSet}
          />
        ))}
      </CardList>
    </section>
  );
};

export default Items;
