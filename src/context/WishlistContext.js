import React, { createContext, useContext, useReducer } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, dispatch] = useReducer(wishlistReducer, []);

  const addToWishlist = item => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  };

  const removeFromWishlist = item => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item });
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
