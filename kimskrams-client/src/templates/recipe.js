import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "../components/recipe/recipeDetail.scss"

export default function RecipePage({ data }) {
  const recipe = data.contentfulRezept
  return (
    <Layout>
      <div className="recipe-detail-box">
        <div className="recipe-detail-box-head">
          <div className="recipe-detail-box-head-left">
            <Img
              fluid={recipe.image.fluid}
              className="recipe-detail-box-head-image"
              alt="recipeImage"
            ></Img>
            <h1 className="recipe-detail-box-head-title">{recipe.headline}</h1>
          </div>
          <div className="recipe-detail-box-head-content">
            <div
              className="recipe-detail-box-head-content-intro"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  recipe.introduction ? recipe.introduction.json : ""
                ),
              }}
            ></div>
            <div className="recipe-detail-box-head-content-info">
              <div className="recipe-detail-box-head-content-info-ingredients">
                <h2>Zutaten</h2>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => {
                    return <li key={i}>{ingredient}</li>
                  })}
                </ul>
              </div>
              <div className="recipe-detail-box-head-content-info-body">
                <h2>Anleitung</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      recipe.instruction ? recipe.instruction.json : ""
                    ),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulRezept(slug: { eq: $slug }) {
      node_locale
      headline
      title
      id
      createdAt(locale: "de-DE", formatString: "Do MMMM YYYY")
      introduction {
        json
      }
      image {
        fluid(maxHeight: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      ingredients
      instruction {
        json
      }
    }
  }
`
