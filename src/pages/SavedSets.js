import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import Card from '../components/Card';
import './SavedSets.css';
import ItemCard from '../components/ItemCard';
import { currentSetActions } from '../store/currentSet';

const SavedSets = () => {
  const dispatch = useDispatch();
  const savedSets = useSelector((state) => state.savedSets);

  React.useEffect(() => {
    dispatch(currentSetActions.setCurrentPage('Saved Sets'));
    // eslint-disable-next-line
  }, []);

  const handleItemCardClick = () => {};

  return (
    <section className='saved-sets'>
      <ul className='saved-sets__list'>
        {savedSets.map((set, index) => (
          <Card key={set.key}>
            <div className='saved-sets__set-header'>
              <p className='saved-sets__set-title'>Set {index + 1}</p>
              <button className='saved-sets__delete-set-button'>Delete</button>
            </div>

            <CardList className='saved-sets__items-list'>
              {Array.of(set.shirt, set.pants, set.shoes).map((item) => (
                <ItemCard
                  type={item.type}
                  brand={item.brand}
                  color={item.color}
                  size={item.size}
                  key={item.id}
                  id={item.id}
                  handleItemCardClick={handleItemCardClick}
                />
              ))}
            </CardList>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default SavedSets;
