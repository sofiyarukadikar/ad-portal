// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';


import Login from './Projecthtml/Login';
import Mobiles from './Projecthtml/Mobiles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignUp from './Projecthtml/SignUp';
import Home from './Projecthtml/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactPages from './Projecthtml/ContactPages';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/ContactPage" element={<ContactPage/>} ></Route> */}
        <Route path="/ContactPages" element={<ContactPages/>} ></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/Mobiles" element={<Mobiles/>}></Route>
        <Route Exact path="/" element={<Home/>}></Route>
        <Route Exact path="/Home" element={<Home/>}></Route>

      </Routes>
    </BrowserRouter>



  );
}

export default App;



