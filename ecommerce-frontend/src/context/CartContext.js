// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { cartApi } from '../api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await cartApi.get('/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      await cartApi.post('/cart', item);
      fetchCartItems();
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await cartApi.delete(`/cart/${id}`);
      fetchCartItems();
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};