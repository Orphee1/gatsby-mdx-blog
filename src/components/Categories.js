import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { distinct },
  } = data
  //   console.log(data)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
