import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Escoo from './Escoo';
import ThunderBolt from './ThunderBolt';
import Zenith from './Zenith';
import UGo from './UGo';
import Lambretta from './Lambretta';
import AddCustomer from './Customers';
import Login from './Login';
import ServiceForm from './ServiceForm';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/escoo' element={<Escoo/>}></Route>
      <Route path='/thunderbolt' element={<ThunderBolt/>}></Route>
      <Route path='/zenith' element={<Zenith/>}></Route>
      <Route path='/ugo' element={<UGo/>}></Route>
      <Route path='/lambretta' element={<Lambretta/>}></Route>
      <Route path='/customers' element={<AddCustomer/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/serviceform' element={<ServiceForm/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
