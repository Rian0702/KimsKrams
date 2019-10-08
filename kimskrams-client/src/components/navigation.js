import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Logo from "./logo/logo"
import { Button } from "react-md"

import "./navigation.scss"

function navigation() {
  return (
    <div className="navigation">
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <Logo></Logo>
      </Link>
      <StaticQuery
        query={graphql`
          query AllCategories {
            allContentfulKategorie {
              nodes {
                name
                slug
              }
            }
          }
        `}
        render={data => (
          <>
            {data.allContentfulKategorie.nodes.map((category, i) => {
              return (
                <Button raised>
                  <Link
                    className="navigation-link"
                    to={"/" + category.slug}
                    key={i}
                  >
                    {category.name}
                  </Link>
                </Button>
              )
            })}
          </>
        )}
      />
    </div>
  )
}

export default navigation