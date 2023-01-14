import TypeLink from '../components/TypeLink';
import CardList from '../components/CardList';

import './Home.css';

import shirtSmallIconSource from '../images/icons/shirt-icon-small.png';
import pantsSmallIconSource from '../images/icons/pants-icon-small.png';
import shoesSmallIconSource from '../images/icons/shoes-icon-small.png';

import { typeLinkListData } from '../utils/constants';

const Home = () => {
  return (
    <section className='home'>
      <div className='home__summary'>
        <a className='home__sets-count' href='/saved-sets'>
          X sets
        </a>
        <ul className='home__items-count-list'>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={shirtSmallIconSource}
              alt='small shirt icon'
            />
            : X
          </li>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={pantsSmallIconSource}
              alt='small pants icon'
            />
            : Y
          </li>
          <li className='home__item-count'>
            <img
              className='home__item-count-icon'
              src={shoesSmallIconSource}
              alt='small shoes icon'
            />
            : Z
          </li>
        </ul>
      </div>
      <CardList>
        {typeLinkListData.map((link, index) => (
          <TypeLink
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
