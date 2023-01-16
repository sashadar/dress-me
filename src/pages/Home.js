import { useDispatch, useSelector } from 'react-redux';
import { savedSetsActions } from '../store/savedSets';
import { currentSetActions } from '../store/currentSet';
import { allItemsActions } from '../store/allItems';

import TypeLink from '../components/TypeLink';
import CardList from '../components/CardList';

import shirtSmallIconSource from '../images/icons/shirt-icon-small.png';
import pantsSmallIconSource from '../images/icons/pants-icon-small.png';
import shoesSmallIconSource from '../images/icons/shoes-icon-small.png';

import { typeLinkListData } from '../utils/constants';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const savedSets = useSelector((state) => state.savedSets);
  const allItems = useSelector((state) => state.allItems);
  const itemsCount = { shirt: 0, pants: 0, shoes: 0 };
  allItems.forEach((element) => {
    itemsCount[element.type] += 1;
  });

  console.log('savedSets:');
  console.log(savedSets);
  const savedSetsCount = savedSets.length;
  console.log(savedSetsCount);
  console.log(itemsCount);

  return (
    <section className='home'>
      <div className='home__summary'>
        <a className='home__sets-count' href='/saved-sets'>
          {savedSetsCount} Saved Sets
        </a>
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
