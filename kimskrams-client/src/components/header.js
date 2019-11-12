import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

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
      <Navigation></Navigation>
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
