import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo/logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      backgroundColor: "#fff",
    }}
  >
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        paddingTop: `1.45rem`,
        paddingBottom: "1.45rem",
        paddingLeft: "1.45rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Logo></Logo>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
