import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const products = data.allProductsJson.edges;

  const filteredProducts = products.filter(({ node }) =>
    node.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Seo title="Home" />
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Deleens Home Bake</h1>
        <p className="lead">Delicious homemade baked goods made with love.</p>
        <hr className="my-4" />
        <p>Explore our range of products and find your favorite treat!</p>
        <a className="btn btn-primary btn-lg" href="#products" role="button">Shop Now</a>
      </div>
      <div id="products" className="container py-5">
        <h2 className="h3 mb-4">Our Products</h2>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="row">
          {filteredProducts.map(({ node }) => (
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
                  <Link to={`/products/${node.id}`} className="btn btn-primary">View Details</Link>
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
          description
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />

export default IndexPage;
