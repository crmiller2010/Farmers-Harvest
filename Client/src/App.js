import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

//route and app builder

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/login' 
            element={<Login />} 
          />
          <Route 
            path='/addproduce' 
            element={<AddProduce />} 
          />
          <Route 
            path='/listofproduce' 
            element={<ListofProduce />} 
          />
          <Route 
            path='*'
            element={<h1 className='comingsoon'> Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
