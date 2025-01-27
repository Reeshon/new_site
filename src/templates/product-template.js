import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductTemplate = ({ data }) => {
  const product = data.productsJson;
  const image = product.image?.childImageSharp ? getImage(product.image.childImageSharp) : null;

  return (
    <Layout>
      <Seo title={product.name} />
      <div className="container py-5">
        <h1>{product.name}</h1>
        {image ? (
          <GatsbyImage image={image} alt={product.name} />
        ) : (
          <p>No image available</p>
        )}
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      name
      price
      image {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      description
    }
  }
`;

export default ProductTemplate;