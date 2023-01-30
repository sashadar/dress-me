import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';
import { allItemsActions } from '../store/allItems';

import './Items.css';

import CardList from '../components/CardList';
import ItemCard from '../components/ItemCard';
import CheckBox from '../components/CheckBox';

const Items = (props) => {
  const dispatch = useDispatch();

  const [isFilterMenuVisible, setIsFilterMenuVisible] = React.useState(false);

  const allItems = useSelector((state) => state.allItems);
  const currentSet = useSelector((state) => state.currentSet);
  //const savedSets = useSelector((state) => state.savedSets);
  const filterStates = currentSet.filterStates;
  const currentType = currentSet.currentType;

  let currentList = [];
  //let storedSameTypeBrands = [];

  /*   if (savedSets && currentType) {
    storedSameTypeBrands = savedSets.map((set) => {
      if (set[currentType] && set[currentType].brand) {
        return set[currentType].brand;
      }
      return null;
    });
  } */

  /*   const currentTypeItems = allItems.filter(
    (item) =>
      item.type === currentSet.currentType &&
      !storedSameTypeBrands.includes(item.brand)
  ); */

  const currentTypeItems = allItems.filter((item) => item.type === currentType);

  const ifAnyColorChecked = currentSet.colorCheckboxes.reduce(
    (acc, color) => acc || filterStates[color] === true,
    false
  );

  const ifAnySizeChecked = currentSet.sizeCheckboxes.reduce(
    (acc, size) => acc || filterStates[size] === true,
    false
  );

  if (!ifAnyColorChecked && !ifAnySizeChecked) {
    currentList = currentTypeItems;
  } else if (ifAnyColorChecked && ifAnySizeChecked) {
    currentList = currentTypeItems.filter(
      (item) => filterStates[item.size] && filterStates[item.color]
    );
  } else {
    currentList = currentTypeItems.filter(
      (item) => filterStates[item.size] || filterStates[item.color]
    );
  }

  //arrange list by color
  if (currentSet.shirt && currentType === 'pants') {
    currentList
      .sort((a, b) => a.color - b.color)
      .sort((a, b) => {
        if (a.color === currentSet.color && b.color !== currentSet.color) {
          return;
        }
      });
  }

  const uniqueSizeList = useSelector(
    (state) => state.currentSet.sizeCheckboxes
  );
  const uniqueColorList = useSelector(
    (state) => state.currentSet.colorCheckboxes
  );

  React.useEffect(() => {
    document.title = 'DressMe | Items';
    dispatch(currentSetActions.setCurrentPage('Items'));
    // eslint-disable-next-line
  }, []);

  const handleFilterMenuClick = () => {
    setIsFilterMenuVisible((prevValue) => !prevValue);
  };

  const addItemToSet = (id, type) => {
    const item = currentList.find((item) => item.id === id);

    if (type === 'shoes') {
      dispatch(currentSetActions.addShoes(item));
    } else if (type === 'pants') {
      dispatch(currentSetActions.addPants(item));
    } else if (type === 'shirt') {
      dispatch(currentSetActions.addShirt(item));
    }
    dispatch(allItemsActions.removeItem(item.id));

    const nextType = ['shirt', 'pants', 'shoes']
      .filter((item) => item !== type)
      .find((item) => !currentSet[item].id);

    props.handleTypeChoose(nextType);
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
            page='items'
          />
        ))}
      </CardList>
    </section>
  );
};

export default Items;
