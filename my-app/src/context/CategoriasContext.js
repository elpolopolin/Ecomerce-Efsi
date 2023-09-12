import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(categories !== []){
    return (
        <CategoriasContext.Provider
          value={{
            categories,
          }}
        >
          {props.children}
        </CategoriasContext.Provider>
      );
  }
};

export default CategoriasProvider;