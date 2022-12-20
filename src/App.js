import './App.css';
import Form from './Form';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './NavComponents/Home';
import Services from './NavComponents/Services';
import Products from './NavComponents/Products';
import Ai from './NavComponents/Ai';
import Blog from './NavComponents/Blog';
import About from './NavComponents/About';
import Contact from './NavComponents/Contact';
import NavBar from './Header';
import Homes from './NavComponents/Homes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Home/>
      <Routes>
        <Route path='/home' element={<Homes/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/ai' element={<Ai/>}/>
        <Route path='/careers' element={<Ai/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Form/>
    </div>
  );
}

export default App;
