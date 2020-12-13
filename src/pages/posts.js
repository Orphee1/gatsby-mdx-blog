import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  //   console.log(posts)

  return (
    <Layout>
      <SEO title="Posts" />
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default PostsPage
