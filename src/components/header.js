import React from 'react';
import Link from 'gatsby-link'

export class Header extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          class: 'block'
        };
  };

  toggleMenu = () => {
    this.menu.classList.toggle('block');
  };

  render() {
    return (
      <div>
        <figure className="mobile-menu">
          <img onClick={this.toggleMenu} className="button" src={require("../images/menu.png")} />
        </figure>
        <nav ref={(nav) => this.menu = nav} >
          <ul>
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="about">
              <li>j+t</li>
            </Link>
            <Link to="enneagram">
              <li>enneagram</li>
            </Link>
            <Link to="contact">
              <li>contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
};