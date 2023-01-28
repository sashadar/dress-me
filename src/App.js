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
import Footer from './components/Footer';

import * as api from './utils/api';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allItems = useSelector((state) => state.allItems);
  const currentSet = useSelector((state) => state.currentSet);
  const savedSets = useSelector((state) => state.savedSets);

  const handleTypeChoose = (type) => {
    dispatch(currentSetActions.setCurrentType(type));
    let storedSameTypeBrands = [];

    if (currentSet.startTime === 0) {
      dispatch(currentSetActions.setStartTime(new Date().getTime()));
    }

    if (savedSets) {
      storedSameTypeBrands = savedSets.map((set) => {
        if (set[type] && set[type].brand) {
          return set[type].brand;
        }
        return null;
      });
    }
    const currentList = allItems.filter(
      (item) => item.type === type && !storedSameTypeBrands.includes(item.brand)
    );
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

  React.useEffect(() => {
    if (currentSet.shoes.id && currentSet.pants.id && currentSet.shirt.id) {
      const currDate = new Date().getTime();
      const dateDiffObj = new Date(currDate - currentSet.startTime);
      const hours = dateDiffObj.getUTCHours();
      const minutes = dateDiffObj.getUTCMinutes();
      const seconds = dateDiffObj.getSeconds();
      const timeDiffStr =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0');

      let updatedSetList = [];
      const newSet = {
        shirt: currentSet.shirt,
        pants: currentSet.pants,
        shoes: currentSet.shoes,
        key: Math.random(),
        timeSpent: timeDiffStr,
      };

      updatedSetList = [...savedSets, newSet];
      dispatch(savedSetsActions.add(newSet));
      localStorage.setItem('savedSets', JSON.stringify(updatedSetList));
      dispatch(currentSetActions.reset());

      history.push('/home');
    }
  }, [
    dispatch,
    currentSet.shoes,
    currentSet.pants,
    currentSet.shirt,
    currentSet.startTime,
    savedSets,
    history,
  ]);

  return (
    <div className='app'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home/'></Redirect>
          </Route>
          <Route exact path='/dress-me'>
            <Redirect to='/home/'></Redirect>
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
      <Footer />
    </div>
  );
}

export default App;
