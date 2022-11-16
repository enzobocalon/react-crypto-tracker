import Coins from './components/Coins/Coins'
import Menu from './components/Menu/Menu'
import { Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './global'
import Home from './pages/Home/Home';
import FavoritePage from './pages/Favorites/FavoritePage';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<FavoritePage />} />
        </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
