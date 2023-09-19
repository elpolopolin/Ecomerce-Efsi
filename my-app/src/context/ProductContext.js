import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    cargarProducts();
  }, []);

  const filterBySearch = (category, text) => {
    let filteredProducts = products;
  
    if (category !== '') {
      filteredProducts = filteredProducts.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
  
    if (text !== '') {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  
    setProductsFilter(filteredProducts);
  };



  const cargarProducts = () => {
    axios
      .get("https://dummyjson.com/products/")
      .then((result) => {
        const productos = result.data.products;
        setProducts(productos);
        setProductsFilter(productos);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsFilter,
        filterBySearch,
        cargarProducts
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;