import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allItemsActions } from './store/allItems';
import { savedSetsActions } from './store/savedSets';
import { currentSetActions } from './store/currentSet';

import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import SavedSets from './pages/SavedSets';

import * as api from './utils/api';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allItems = useSelector((state) => state.allItems);

  const handleTypeChoose = (type) => {
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

    if (history.location.pathname === '/home') {
      history.push('/items');
    }
  };

  React.useEffect(() => {
    api
      .getItems()
      .then((items) => {
        if (localStorage.getItem('savedSets')) {
          const savedSets = JSON.parse(localStorage.getItem('savedSets'));

          let allItemIdsToRemove = [];
          savedSets.forEach((set) => {
            const setItemIdsToRemove = Object.keys(set).reduce((ids, item) => {
              if (typeof set[item] === 'object') {
                ids.push(set[item].id);
              }
              return ids;
            }, []);
            allItemIdsToRemove = [...allItemIdsToRemove, ...setItemIdsToRemove];
          });
          items = items.filter((item) => !allItemIdsToRemove.includes(item.id));
          dispatch(savedSetsActions.loadSets(savedSets));
        }

        dispatch(allItemsActions.setItems(items));
      })
      .catch((err) => {
        console.log(`Error:    ${err}`);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home'></Redirect>
          </Route>
          <Route path='/home'>
            <Home handleTypeChoose={handleTypeChoose} />
          </Route>
          <Route path='/items'>
            <Items handleTypeChoose={handleTypeChoose} />
          </Route>
          <Route path='/saved-sets'>
            <SavedSets />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
