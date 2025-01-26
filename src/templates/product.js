import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useCart } from "../context/CartContext"

const ProductContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const ProductPage = ({ data }) => {
  const product = data.productsJson

  // Safely handle missing context
  const cart = useCart() || {}
  const { addToCart } = cart

  const imageData = product.image?.childImageSharp
  const image = imageData && getImage(imageData)

  return (
    <Layout>
      <SEO title={product.name} />
      <ProductContainer>
        <h1>{product.name}</h1>
        { image ? (
          <GatsbyImage image={image} alt={product.name} />
        ) : (
          <p>No image available</p>
        )}
        <p>{product.description}</p>
        <h2>${product.price.toFixed(2)}</h2>
        <button onClick={() => addToCart?.(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </ProductContainer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      name
      price
      image {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
      description
    }
  }
`

export default ProductPage