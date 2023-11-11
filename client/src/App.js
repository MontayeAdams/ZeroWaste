import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Search from './Components/SearchPage/SearchPage';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path="/login" exact Component={Login} />
        <Route path="/signup" exact Component={Signup} />\
        <Route path="/search" exact Component={Search} />
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
