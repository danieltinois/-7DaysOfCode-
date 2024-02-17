import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState(() => {
    // Inicializar o estado com o valor do localStorage ou um array vazio
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  function addProductToCart(product) {
    setProductsCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  function removeProductToCart(index) {
    setProductsCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1); // Removendo o item do índice especificado
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
