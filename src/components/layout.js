/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby" // Removed unused imports
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from 'react-helmet';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deleens Home Bake</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header siteTitle="Deleens Home Bake" />
      <main>{children}</main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Deleens Home Bake</p>
        <p>
          Follow us on <a href="https://www.instagram.com/_deleens/" className="text-white">Instagram</a> and{" "}
          <a href="https://www.facebook.com/profile.php?id=61556402116452" className="text-white">Facebook</a>
        </p>
        <p>Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
