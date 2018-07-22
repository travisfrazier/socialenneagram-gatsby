import React from 'react'
//import Link from 'gatsby-link'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const IndexPage = () => (
  <div>
    <Header />
    <header className="section banner-one">
      <img src={require("../images/logo.png")} />
    </header>
    <section className="section banner-two">
      <img src={require("../images/self-two.jpg")} />
    </section>
    <section className="section banner-three">
      <img src={require("../images/enneagram.png")} />
    </section>
    <Footer />
  </div>
)

export default IndexPage
