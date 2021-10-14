import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import './Navbar.css'
import { Button } from './Button'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='navbar-item'>
        <h1 className='navbar-logo'>
          SD Ascension
          <i id='logo-icon'>
            <FaReact />
          </i>
        </h1>
        <div className='menu-icon' onClick={this.handleClick}>
          {this.state.clicked ? (
            <VscChromeClose className='iconX' />
          ) : (
            <AiOutlineMenu />
          )}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button style={{padding:0}}>
          <a href='/login' style={{textDecoration: 'none'}}>Log In</a>
        </Button>
      </nav>
    )
  }
}

export default Navbar
