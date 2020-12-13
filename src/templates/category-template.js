import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  //   console.log(props)

  const {
    pageContext: { category },
  } = props
  const {
    data: {
      postC: { nodes: posts },
    },
  } = props
  return (
    <Layout>
      <SEO />
      <Hero />
      <Posts posts={posts} title={`category / ${category} `} />
    </Layout>
  )
}

export const query = graphql`
  query getPostCategorized($category: String) {
    postC: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default CategoryTemplate
