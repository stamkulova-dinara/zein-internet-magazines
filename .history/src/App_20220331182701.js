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
import Card from './components/card';
import Basket from './components/Basket';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route index path='/collections/:id' element={<CollectionByTitle/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/offer' element={<Off}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
      <Footer/>
      </Router>
   </div>
  );
}

export default App;