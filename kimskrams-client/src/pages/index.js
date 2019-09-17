import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import TypoBox from "../components/typo-box"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pages {
        startPage {
          fields {
            pageName
            headline
            bodyText
            image {
              fields {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={data.pages.startPage.fields.pageName} />

      <TypoBox
        imageUrl={data.pages.startPage.fields.image.fields.file.url}
        headline={data.pages.startPage.fields.headline}
        bodyText={data.pages.startPage.fields.bodyText}
      />
    </Layout>
  )
}

export default IndexPage
