import React from 'react';
import { graphql } from 'gatsby';


const ProductTemplate = ({ data }) => {
  const product = data.productsJson;
  const image = getImage(product.image.childImageSharp);

  return (
    <div>
      <h1>{product.name}</h1>
      <GatsbyImage image={image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {/* Add to Cart functionality can be integrated here */}
    </div>
  );
};

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
`;

export default ProductTemplate;