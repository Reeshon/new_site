import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useCart } from "../context/CartContext";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CheckoutPage = () => {
  // Safely handle missing context
  const cartContext = useCart();
  const { cartItems = [], updateQuantity, removeFromCart } = cartContext || {};

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Handle checkout logic here, such as integrating with a payment gateway
    alert("Checkout not implemented yet.");
  };

  return (
    <Layout>
      <Seo title="Checkout" />
      <CheckoutContainer>
        <h1>Checkout</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label> {/* Added label */}
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        min="1"
                        onChange={e => updateQuantity?.(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeFromCart?.(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          </>
        )}
      </CheckoutContainer>
    </Layout>
  );
};

export default CheckoutPage;