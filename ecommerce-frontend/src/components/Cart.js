// src/components/Cart.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartContainer = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  color: #fff;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <span>
              {item.quantity}x {item.title}
            </span>
            <RemoveButton onClick={() => removeFromCart(item.id)}>Remover</RemoveButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;