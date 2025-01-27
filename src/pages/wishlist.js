import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo'; // Changed from SEO to Seo
import styled from 'styled-components';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'gatsby';

const WishlistContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const total = wishlistItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Layout>
      <Seo title="Wishlist" /> {/* Ensure usage matches import */}
      <WishlistContainer>
        <h1>Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map(item => (
            <WishlistItem key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromWishlist(item.id)} className="btn btn-danger">
                Remove
              </button>
            </WishlistItem>
          ))
        )}
        {wishlistItems.length > 0 && (
          <>
            <h2>Total: ${total}</h2>
            <Link to="/checkout/" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </>
        )}
      </WishlistContainer>
    </Layout>
  );
};

export default WishlistPage;
