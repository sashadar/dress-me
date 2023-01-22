import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import Card from '../components/Card';
import './SavedSets.css';
import ItemCard from '../components/ItemCard';
import { currentSetActions } from '../store/currentSet';
import { savedSetsActions } from '../store/savedSets';
import { allItemsActions } from '../store/allItems';

const SavedSets = () => {
  const dispatch = useDispatch();
  const savedSets = useSelector((state) => state.savedSets);

  React.useEffect(() => {
    dispatch(currentSetActions.setCurrentPage('Saved Sets'));
    // eslint-disable-next-line
  }, []);

  const handleDeleteSet = (event) => {
    const setKey = event.target.value;
    const setToDelete = savedSets.find((set) => set.key === Number(setKey));
    const updatedSets = JSON.parse(localStorage.getItem('savedSets'));
    console.log(updatedSets);
    updatedSets.splice(
      updatedSets.findIndex((set) => set.key === Number(setKey)),
      1
    );
    localStorage.setItem('savedSets', JSON.stringify(updatedSets));
    dispatch(allItemsActions.addItemsFromSet(setToDelete));
    dispatch(savedSetsActions.remove(setKey));
  };

  const handleItemCardClick = () => {};

  return (
    <section className='saved-sets'>
      <ul className='saved-sets__list'>
        {savedSets.map((set, index) => (
          <Card key={set.key}>
            <div className='saved-sets__set-header'>
              <p className='saved-sets__set-title'>Set {index + 1}</p>
              <button
                value={set.key}
                className='saved-sets__delete-set-button'
                onClick={handleDeleteSet}
              >
                Delete
              </button>
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
                  page='savedSets'
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
