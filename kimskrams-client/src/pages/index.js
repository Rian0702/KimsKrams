import React from "react"
import Layout from "../components/layout"
import TypoBox from "../components/typo-box"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import RecipeOverview from "../components/recipe/recipe-overview"

const IndexPage = () => {
  return (
    <Layout>
      <main className="main">
        <StaticQuery
          query={graphql`
            query Startseite {
              contentfulSeite(pageName: { eq: "Startseite" }) {
                body {
                  json
                }
                headline
                pageName
                image {
                  fluid(maxWidth: 250) {
                    src
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              <SEO title={data.contentfulSeite.pageName} />
              <TypoBox
                imageUrl={data.contentfulSeite.image.fluid.src}
                headline={data.contentfulSeite.headline}
                bodyText={documentToHtmlString(data.contentfulSeite.body.json)}
              />
              <h1 className="boxed-headline">Die 10 neuesten Rezepte</h1>
              <RecipeOverview
                style={{
                  backgroundColor: "#faf5ee",
                  paddingTop: "55px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              ></RecipeOverview>
            </>
          )}
        />
      </main>
    </Layout>
  )
}

export default IndexPage
