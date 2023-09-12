import './App.css';
import React, { createContext,useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsuarioProvider from './context/UserContext';
import { UsuarioContext } from './context/UserContext';
import axios from "axios";

import CategoriasProvider from './context/CategoriasContext';
import Layout from './components/layout';
import Home from './components/home';
import Index from './components/index';
import ProductDetail from './components/ProductDetails';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductProvider from './context/ProductContext';

function App() {  

  return (

    <BrowserRouter>

     <CategoriasProvider>
      <UsuarioProvider>
      <ProductProvider>        
        <Layout /> 

            <Routes>
              <Route index element={<Index />} />
              <Route path="/tienda" element={<Home /> } />
              <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
              <Route path="/allProducts/:categoria" element={<AllProducts />} />
              <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>

        
          <Newsletter />
          <Footer />
        
        </ProductProvider>
        </UsuarioProvider>
        </CategoriasProvider>

    </BrowserRouter>  
  );
}

export default App;
