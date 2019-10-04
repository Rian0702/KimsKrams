import {} from "./../components/recipe/preview"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeOverview from "../components/recipe/recipe-overview"

const AllRecipes = () => (
  <Layout>
    <SEO title="Rezept Übersicht" />
    <h1>Rezept übersicht</h1>
    <RecipeOverview></RecipeOverview>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AllRecipes
