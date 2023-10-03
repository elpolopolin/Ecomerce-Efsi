import React, { useState, createContext, useEffect } from 'react';

const CartContext = createContext({
  cart: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {}; // ? (verifica si hay localestorage no es NULL) : (si es NULL se guarda {})
  });

  useEffect(() => {
    // cuando cambiamos algo de cart automaticamente se guarda en locale storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[item.id] = {
        ...item,
        quantity: (prevCart[item.id] ? prevCart[item.id].quantity : 0) + 1,
      };
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };