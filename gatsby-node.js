const path = require("path");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            id
            # Remove or adjust the image field:
            # image {
            #   publicURL
            # }
          }
        }
      }
    }
  `);

  result.data.allProductsJson.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.id}`,
      component: require.resolve(`./src/templates/product.js`),
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

