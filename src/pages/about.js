import React from 'react'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const About = () => (
  <div>
    <Header />
    <section className="section about-us">
      <img src={require("../images/jandt.jpg")} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        qui, in cum animi deleniti maiores exercitationem modi dolorum pariatur
        ducimus beatae sapiente temporibus et suscipit rerum mollitia est atque.
        Vel alias corrupti fugiat voluptates maiores nobis commodi voluptas
        reiciendis exercitationem? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
        <a href="contact.html">
          <u>Let's chat!</u>
        </a>
      </p>
    </section>
    <section className="section about-us-two">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        qui, in cum animi deleniti maiores exercitationem modi dolorum pariatur
        ducimus beatae sapiente temporibus et suscipit rerum mollitia est atque.
        Vel alias corrupti fugiat voluptates maiores nobis commodi voluptas
        reiciendis exercitationem? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
      </p>
      <img src={require("../images/us.jpg")}/>
    </section>
    <Footer />
  </div>
)

export default About
