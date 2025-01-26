import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Product from "../components/Product"
import styled from "styled-components"
import productsData from "../data/products.json"

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`

const ProductsPage = () => (
  <Layout>
    <Seo title="Products" />
    <h1>Our Products</h1>
    <ProductsContainer>
      {productsData.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  </Layout>
)

export default ProductsPage