import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { Link } from 'gatsby';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 5px;
  }
`;

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <Layout>
      <SEO title="Cart" />
      <CartContainer>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <CartItem key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <QuantityControl>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-secondary">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-secondary">+</button>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger ml-2">Remove</button>
              </QuantityControl>
            </CartItem>
          ))
        )}
        {cartItems.length > 0 && (
          <>
            <h2>Total: ${total}</h2>
            <Link to="/checkout/" className="btn btn-primary">Proceed to Checkout</Link>
          </>
        )}
      </CartContainer>
    </Layout>
  );
};

export default CartPage;