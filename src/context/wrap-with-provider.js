import React from "react";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        {element}
      </WishlistProvider>
    </CartProvider>
  );
};