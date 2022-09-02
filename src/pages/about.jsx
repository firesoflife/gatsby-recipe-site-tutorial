import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="contact-page">
          <article className="">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicin</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              quisquam accusamus vel, magni a sit repellat quasi! Culpa,
              incidunt? Temporibus quidem reprehenderit ea laboriosam, vel
              tempore iusto provident, consequuntur maiores molestiae vero
              blanditiis et! Nostrum dignissimos nulla dolorum a repudiandae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              atque, officia vitae nam ad laborum, quisquam quasi rem iusto in
              quidem harum deleniti.
            </p>
            <Link to="/contact"> contact</Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person puring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Beautiful Mess</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
