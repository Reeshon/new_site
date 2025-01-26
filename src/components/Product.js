import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { useCart } from "../context/CartContext"

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`

const ProductName = styled.h3`
  margin: 16px 0 8px;
`

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #555;
`

const Product = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <ProductCard>
      <Link to={`/products/${product.id}/`}>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
      </Link>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <button onClick={() => addToCart(product)} className="btn btn-primary">
        Add to Cart
      </button>
      <Link to={`/products/${product.id}/`} className="btn btn-primary">
        View Details
      </Link>
    </ProductCard>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Product