const path = require("path");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allProductsJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allProductsJson.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.id}`,
      component: path.resolve(`./src/templates/product-template.js`),
      context: { id: node.id },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type ProductsJson implements Node {
      id: ID!
      name: String!
      price: Float!
      image: File @fileByRelativePath
      description: String!
    }
  `);
};

