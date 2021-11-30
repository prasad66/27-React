// /* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable-next-line no-unused-vars*/
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProducts from './components/AllProducts';
import Home from './components/Home';
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct';



function App() {



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/products' element={<AllProducts />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

      {/* <!-- Header--> */}
      {/* <Header /> */}

      {/* <!-- Products Section--> */}
      {/* <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          </div>
        </div>
      </section> */}


      {/* <!-- Footer--> */}

    </>
  );
}

export default App;
