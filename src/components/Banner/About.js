import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
    image: file(relativePath: { eq: "banner-about2.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const { image } = data

  return (
    <Wrapper>
      <Title title="about me" />
      <Image fixed={image.childImageSharp.fixed} className="img" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
