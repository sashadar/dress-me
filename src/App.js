import { Route, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import { useDispatch } from 'react-redux';
import { allItemsActions } from './store/allItems';
import { savedSetsActions } from './store/savedSets';

import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import SavedSets from './pages/SavedSets';

import * as api from './utils/api';

import './App.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .getItems()
      .then((items) => {
        if (localStorage.getItem('savedSets')) {
          const savedSets = JSON.parse(localStorage.getItem('savedSets'));

          let allItemIdsToRemove = [];
          savedSets.forEach((set) => {
            console.log(set);
            const setItemIdsToRemove = Object.keys(set).reduce((ids, item) => {
              console.log(set[item]);
              console.log(typeof set[item]);
              if (typeof set[item] === 'object') {
                console.log(set[item].id);
                ids.push(set[item].id);
              }
              return ids;
            }, []);
            console.log(setItemIdsToRemove);
            allItemIdsToRemove = [...allItemIdsToRemove, ...setItemIdsToRemove];
          });
          items = items.filter((item) => !allItemIdsToRemove.includes(item.id));
          console.log(allItemIdsToRemove);
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
          <Route path='/home/'>
            <Home />
          </Route>
          <Route path='/items'>
            <Items />
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
