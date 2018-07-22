import React from 'react'
//import Link from 'gatsby-link'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const Enneagram = () => (
  <div>
    <Header />
    <section className="section enneagram">
      <img src={require("../images/what.jpg")} />
      <p>
        The Enneagram is tremendously helpful tool. It has been used to help us map out and navigate the journey of our souls.
      </p>

      <p>
        As helpful as the Enneagram may be for some of us, it is not a necessity to growing as an individual and someone who loves.
        The goal of the Enneagram is to assist solely in the goal of self improvement but in fact to become aware of our True
        Self.
      </p>

      <p>
        The Enneagram shows us that if left to our own desires of improving only ourselves according to our ego it would lead to
        our own destruction. The Enneagram provides language that allows us access to a conscious stream of challenging ourselves
        through admittance of our shortcomings. The Enneagram gives us enlightenment to the addiction of ourselves and a map
        to find freedom.
      </p>
    </section>
    <Footer />
  </div>
)

export default Enneagram