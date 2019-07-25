exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  posts.forEach(({ node }) => {
    console.log(node.frontmatter)
    const { slug } = node.frontmatter

    if (!!slug) {
      console.log(slug)
      createPage({
        path: slug,
        component: require.resolve("./src/templates/post-template.js"),
        context: {
          slug: slug,
        },
      })
    }
  })
}
