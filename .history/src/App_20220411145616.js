import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import About from './components/About';
import Collections from './components/Collections';
import News from './components/News';
import Home from './components/Home';
import CollectionByTitle from './components/CollectionByTitle';
import Footer from './components/Footer';
import Product from './components/Product';
import Help from './components/Help';
import Favorites from './components/Favorites';
import Basket from './components/Basket';
import Offer from './components/Offer';
import SearchResult from './components/SearchResult';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      <Router>
        <Navbar setSearchResult={setSearchResult} searchResult={searchResult} setSearchValue={setSearchValue}/>
      {/* <Header setSearchResult={setSearchResult} searchResult={searchResult} setSearchValue={setSearchValue}/> */}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/collections/:id' element={<CollectionByTitle/>}/>
        <Route path='/collections/:id/product/:productId' element={<Product/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/search' element={<SearchResult searchResult={searchResult} searchValue={searchValue}/>}/>
      </Routes>
      <Footer/>
      </Router>
   </div>
  );
}

export default App;