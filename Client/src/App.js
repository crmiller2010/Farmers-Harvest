import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import Login from './components/pages/login';
import AddProduce from './components/pages/addproduce';
//style for 404 page

const Style = {
  whoops: {
  }
}

//route and app builder

function App() {
  return (
    <Router>
      <>
        <Header />
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
            path='*'
            element={<h1 style={Style.whoops}> 404 Error!</h1>}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
