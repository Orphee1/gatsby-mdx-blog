import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  //   console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero showPerson />

      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
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

export default IndexPage
