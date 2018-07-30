import React from 'react'
import Link from 'gatsby-link'

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        displayMenu: !prevState.displayMenu,
      }
    })
  }

  render() {
    return (
      <div>
        <figure className="mobile-menu">
          <img
            onClick={this.toggleMenu}
            className="button"
            src={require('../images/menu.png')}
          />
        </figure>
        <nav className={this.state.displayMenu ? 'block' : ''}>
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
}
