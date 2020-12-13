import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      totalCount
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { nodes: instas },
  } = data
  //   console.log(instas)

  return (
    <Wrapper>
      <Title title="Instagram" />
      <div className="images">
        {instas.map((insta, index) => {
          const { localFile } = insta
          return <Image key={index} fluid={localFile.childImageSharp.fluid} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
