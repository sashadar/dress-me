import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';
import { savedSetsActions } from '../store/savedSets';
import { useHistory, Link } from 'react-router-dom';

import TypeLink from '../components/TypeLink';
import CardList from '../components/CardList';

import shirtSmallIconSource from '../images/icons/shirt-icon-small.png';
import pantsSmallIconSource from '../images/icons/pants-icon-small.png';
import shoesSmallIconSource from '../images/icons/shoes-icon-small.png';

import { typeLinkListData } from '../utils/constants';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const savedSets = useSelector((state) => state.savedSets);
  const allItems = useSelector((state) => state.allItems);
  const currentSet = useSelector((state) => state.currentSet);

  const itemsCount = { shirt: 0, pants: 0, shoes: 0 };
  const savedSetsCount = savedSets.length;

  const isDisabled = (type) =>
    currentSet.shirt.type === type ||
    currentSet.pants.type === type ||
    currentSet.shoes.type === type ||
    currentSet.currentType === type ||
    itemsCount[type] === 0;

  React.useEffect(() => {
    dispatch(currentSetActions.setCurrentPage('Home'));
    // eslint-disable-next-line
  }, []);

  allItems.forEach((element) => {
    itemsCount[element.type] += 1;
  });

  React.useEffect(() => {
    if (currentSet.shoes.id && currentSet.pants.id && currentSet.shirt.id) {
      let updatedSetList = [];
      const newSet = {
        shirt: currentSet.shirt,
        pants: currentSet.pants,
        shoes: currentSet.shoes,
        key: Math.random(),
      };

      updatedSetList = [...savedSets, newSet];
      dispatch(savedSetsActions.add(newSet));
      localStorage.setItem('savedSets', JSON.stringify(updatedSetList));
      dispatch(currentSetActions.reset());
    }
  }, [
    dispatch,
    currentSet.shoes,
    currentSet.pants,
    currentSet.shirt,
    savedSets,
  ]);

  const handleTypeLinkClick = (type) => {
    dispatch(currentSetActions.setCurrentType(type));
    const currentList = allItems.filter((item) => item.type === type);
    const sizeCheckboxes = Array.from(
      new Set(currentList.map((item) => item.size))
    ).sort();
    const colorCheckboxes = Array.from(
      new Set(currentList.map((item) => item.color))
    ).sort();
    dispatch(currentSetActions.setSizeCheckBoxes(sizeCheckboxes));
    dispatch(currentSetActions.initializeFilters(sizeCheckboxes));
    dispatch(currentSetActions.setColorCheckBoxes(colorCheckboxes));
    dispatch(currentSetActions.initializeFilters(colorCheckboxes));

    history.push('/items');
  };

  return (
    <section className='home'>
      <div className='home__summary'>
        <Link className='home__sets-count' to='/saved-sets'>
          Sets: {savedSetsCount}
        </Link>
        <ul className='home__items-count-list'>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={shirtSmallIconSource}
              alt='small shirt icon'
            />
            : {itemsCount.shirt}
          </li>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={pantsSmallIconSource}
              alt='small pants icon'
            />
            : {itemsCount.pants}
          </li>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={shoesSmallIconSource}
              alt='small shoes icon'
            />
            : {itemsCount.shoes}
          </li>
        </ul>
      </div>
      <CardList>
        {typeLinkListData.map((link, index) => (
          <TypeLink
            handleTypeLinkClick={handleTypeLinkClick}
            isDisabled={isDisabled(link.type)}
            type={link.type}
            imgClass={link.class}
            title={link.title}
            key={index}
          ></TypeLink>
        ))}
      </CardList>
    </section>
  );
};

export default Home;
