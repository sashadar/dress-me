import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';

import * as api from './utils/api';

import './App.css';

function App() {
  const [allItems, setAllItems] = React.useState([]);

  React.useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setAllItems(items);
        console.log(items[0]);
      })
      .catch((err) => {
        console.log(`Error:    ${err}`);
      });
  }, []);

  return (
    <div className='app'>
      <Header />
      <main>
        {/* <Home /> */}
        <Items />
      </main>
    </div>
  );
}

export default App;
