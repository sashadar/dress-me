import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allItemsActions } from './store/allItems';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';

import * as api from './utils/api';

import './App.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .getItems()
      .then((items) => {
        dispatch(allItemsActions.setItems(items));
      })
      .catch((err) => {
        console.log(`Error:    ${err}`);
      });
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
