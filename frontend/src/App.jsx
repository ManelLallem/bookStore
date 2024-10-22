import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Shop from './Components/Shop';
import Basket from './Components/Basket';

function App(props) {
  return (
    <div>
       <BrowserRouter>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/Login"> Login</Link>
        <Link to="/SignUp"> SignUp</Link>
        <Link to="/Shop"> Shop</Link>
        <Link to="/Basket"> Basket</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;