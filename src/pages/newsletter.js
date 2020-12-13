import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
const NewsLetter = () => {
  return (
    <Layout>
      <SEO title="News" />
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my digital friends every two weeks</h4>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
            />

            <button type="submit" className="btn form-control submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
