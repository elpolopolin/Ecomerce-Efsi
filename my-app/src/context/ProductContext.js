import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = (props) => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      cargarProducts();
      
  }, []); 

  const filterBySearch = (category)=>{

  }
  
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
        <ProductContext.Provider
          value={{
            products,
            filterBySearch
          }}
        >
          {props.children}
        </ProductContext.Provider>
      );

};

export default ProductProvider;