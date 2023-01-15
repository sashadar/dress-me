import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';

import './App.css';

function App() {
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
