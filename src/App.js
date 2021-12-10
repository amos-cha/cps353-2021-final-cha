import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Test from './components/Test';
import Test2 from './components/Test2';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  return (
      <div className='App'>
        
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/project" element={ <Header /> } />
          <Route path="/test" element={ <Test /> } />
          <Route path="/test2" element={ <Test2 /> } />
        </Routes>
        
      </div>
  );
}

export default App;
