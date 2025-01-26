import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import Layout from "./src/components/layout"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

// You can delete this file if you're not using it
