import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react" // Removed unused import
// import Layout from "./src/components/layout" // Removed unused import

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

export { wrapRootElement } from "./src/context/wrap-with-provider";

// Remove the duplicate wrapRootElement export below
// export const wrapRootElement = ({ element }) => {
//   return <Layout>{element}</Layout>
// }

// You can delete the above duplicate if it's no longer needed
