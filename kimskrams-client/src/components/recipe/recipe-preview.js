import React from "react"
import PropTypes from "prop-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "./recipePreview.scss"

function recipePreview({ recipe }) {
  return (
    <div className="recipe-preview">
      <img src={recipe.image.fluid.src}></img>
      <div className="recipe-preview-box">
        <h2 className="recipe-preview-box-headline">{recipe.title}</h2>
        <span className="recipe-preview-box-date">{recipe.createdAt}</span>
        <div
          className="recipe-preview-box-introduction"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              recipe.introduction ? recipe.introduction.json : ""
            ),
          }}
        ></div>
      </div>
    </div>
  )
}

recipePreview.propTypes = {
  recipe: PropTypes.object,
}

export default recipePreview
