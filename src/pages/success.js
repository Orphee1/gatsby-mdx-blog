import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <SEO />
      <section className="success-page">
        <div className="page-center">
          <h2>Your submission was recieved !</h2>

          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
