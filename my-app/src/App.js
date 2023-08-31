import './App.css';
import React, { createContext,useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsuarioProvider from './context/UserContext';
import { UsuarioContext } from './context/UserContext';
import axios from "axios";

import Layout from './components/layout';
import Home from './components/home';
import Tienda from './components/tienda';
import Persona from './components/persona';
import Index from './components/index';
import ProductDetail from './components/ProductDetails';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';


export const ProductContext = createContext();


function App() {

  const usuario = useContext(UsuarioContext);
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    cargarProducts();
    
}, []); 

const cargarProducts = () => {
    axios
    .get("https://dummyjson.com/products/")
    .then((result) => {
      const productos = result.data.products;
      console.log(productos)
      setProducts(productos);
    })
    .catch((error) => {
      console.log(error);
    });
}

  return (

    <BrowserRouter>
      
      <UsuarioProvider>
      <ProductContext.Provider value={products}>
        
        <Layout /> 

            <Routes>
              <Route index element={<Index />} />
              <Route path="/tienda" element={<Home /> } />
              <Route path="/persona/:personaId" element={<Persona/>} />
              <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
              <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>

        
          <Newsletter />
          <Footer />
        
        </ProductContext.Provider>
        </UsuarioProvider>
        
    </BrowserRouter>  
  );
}

export default App;
