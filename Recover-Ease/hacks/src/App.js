import logo from './logo.svg';
import Navbar from './Navbar.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import './App.css';
import Login from './Login.js';
import Started from './started.js';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/start' element={<Started/>}/>
      </Routes>
      
    </>
    
  )
}

export default App;
