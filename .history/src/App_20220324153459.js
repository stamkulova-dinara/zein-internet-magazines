import './App.css';
import Header from './components/header/Header';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import About from './components/about/About';
import Collections from './components/collections/Collections';
import News from './components/news/News';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route index path='/collections/:id' element={<C}/>
        <Route path='/news' element={<News/>}/>
      </Routes>

      </Router>
    </div>
  );
}

export default App;