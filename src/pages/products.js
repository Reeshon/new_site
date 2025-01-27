import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo'; // Changed from SEO to Seo
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductsPage = ({ data }) => {
  const products = data.allProductsJson.edges;

  return (
    <Layout>
      <Seo title="Products" /> {/* Ensure usage matches import */}
      <div className="container py-5">
        <h1 className="display-4 mb-4">Our Products</h1>
        <div className="row">
          {products.map(({ node }) => (
            <div key={node.id} className="col-md-4 mb-4">
              <div className="card h-100">
                {node.image?.childImageSharp ? (
                  <GatsbyImage
                    className="card-img-top"
                    image={getImage(node.image.childImageSharp)}
                    alt={node.name}
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="card-body">
                  <h5 className="card-title">{node.name}</h5>
                  <p className="card-text">${node.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          id
          name
          price
          image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
`;

export default ProductsPage;