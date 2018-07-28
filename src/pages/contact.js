import React from 'react'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const Contact = () => (
  <div>
    <Header />
    <section className="section contact">
      <img src={require("../images/learn.jpg")} />
      <h2>contact and bookings</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis qui, in cum animi deleniti maiores exercitationem modi
        dolorum pariatur ducimus beatae sapiente temporibus et suscipit rerum mollitia est atque. Vel alias corrupti fugiat.
      </p>
    </section>
    <div className="form-wrapper">
      <form name="signup" method="post">

        <fieldset>
          <label for="name">full name</label>
          <input type="text" id="name" name="name" />

          <label for="mail">email address</label>
          <input type="email" id="mail" name="user_email" />

          <label for="">phone number</label>
          <input type="number" id="number" name="user_number" />

          <label>your messege</label>
          <textarea id="comment" name="user_comment"></textarea>
        </fieldset>
        <button href="#" id="submit" type="submit">send</button>
      </form>
    </div>
    <Footer />
  </div>
)

export default Contact