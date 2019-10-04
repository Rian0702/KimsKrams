const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllRecipes {
      allContentfulRezept(
        filter: { node_locale: { eq: "de" } }
        sort: { fields: createdAt, order: DESC }
      ) {
        nodes {
          slug
          category {
            name
            slug
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result))
  result.data.allContentfulRezept.nodes.forEach(({ slug, category }) => {
    createPage({
      path: category ? category.slug + "/" + slug : slug,
      component: path.resolve(`./src/templates/recipe.js`),
      context: {
        slug: slug,
      },
    })
  })
}
