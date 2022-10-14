import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';




function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/' element={<ItemListContainer />} />
            <Route path='/detalles' element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
