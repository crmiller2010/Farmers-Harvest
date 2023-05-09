import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
//style for 404 page

const Style = {
  whoops: {
    blah: blah,
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
            path='/listofproduce'
            element={<ListofProduce />}
          />
          <Route
            path='*'
            element={<h1 style={Style.whoops}> Wrong page!</h1>}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
