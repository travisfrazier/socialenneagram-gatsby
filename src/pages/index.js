import React from 'react'
import Link from 'gatsby-link'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const IndexPage = () => (
  <div>
    <Header />
    <header className="section banner-one">
      <img src={require('../images/logo.png')} />
      <img className="arrow" src={require('../images/down.png')} />
      <img className="arrow-two" src={require('../images/down.png')} />
    </header>
    <section className="section banner-two">
      <p>
        The Enneagram is a typing system that recognizes 9 perspectives of the
        world. A tool that opens doors for self-awareness and provides insight
        on the views and behaviors of others. Curious on how you view the World?
      </p>
    </section>
    <section id="yes" className="section banner-three">
      <p>where are you on the enneagram?</p>
      <img src={require('../images/enneagram.png')} />
      <Link to="enneagram">
        <button>learn more</button>
      </Link>
    </section>
    <Footer />
  </div>
)

export default IndexPage
