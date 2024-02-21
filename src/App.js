import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import ProductPage from './Components/ProductPage';
import Signup from './Components/Signup';
import RegisterPage from'./Components/RegistrationPage';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
   <BrowserRouter>
   <ul>
   <li><Link to='/home'>Home</Link></li>
    <li><Link to='/signup'>Signup</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/product-page'>Product</Link></li>
    <li><Link to='/register-page'>Register</Link></li>



   </ul>
   <Routes>
   <Route path='home'element={<Home/>}/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/product-page'element={<ProductPage/>}/>
    <Route path='/register-page'element={<RegisterPage/>}/>

   </Routes>
   </BrowserRouter>
  );
}
export default App;
