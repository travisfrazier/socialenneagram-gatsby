import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Link from 'gatsby-link'

const About = () => (
  <div>
    <Header />
    <section className="section about-us wrapper">
      <img src={require('../images/jandt.jpg')} />
      <p>
        We are Justin and Torre Mower, a married couple that has been learning
        from and studying the Enneagram for the past two+ years. We’ve had the
        honor of teaching others about this tool towards greater self-awareness
        over our dining room table, in team settings, and to larger classroom
        sizes. We believe there’s no greater tool on the journey towards growth
        than the Enneagram and we believe that it’s not meant to be done alone.
        Whether it’s in a relationship, with coworkers, or even across your
        dining room table, we’re excited to start this journey with you. For
        both novices and experts alike, it is our hope that sharing from our
        personal experience and those of others, that you’ll fall in love with
        the Enneagram just as we have.
        <Link to="contact">
          <u>Let's chat!</u>
        </Link>
      </p>
    </section>
    <section className="section about-us-two wrapper">
      <img src={require('../images/us.jpg')} />
    </section>
    <Footer />
  </div>
)

export default About
