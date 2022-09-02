import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get In Touch?</h3>
            <p>
              Forage vibecession squid williamsburg meggings hoodie small batch
              fingerstache tattooed kinfolk cold-pressed pork belly. Authentic
              vinyl etsy tumeric brunch DSA cronut, praxis gochujang pickled
              ethical unicorn Brooklyn. Cray chicharrones +1 praxis mukbang pork
              belly.{' '}
            </p>
            <p>
              Lo-fi disrupt messenger bag portland everyday carry trust fund
              pickled JOMO. Seitan etsy actually church-key
            </p>
            <p>
              La croix leggings disrupt, yes plz bodega boys bespoke
              fingerstache lo-fi drinking vinegar helvetica locavore swag.
              Copper mug keffiyeh normcore, pitchfork listicle migas fam tumeric
              typewriter subway tile austin. Disrupt fanny pack tousled, franzen
              distillery adaptogen helvetica. I
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/moqbjqkv"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
