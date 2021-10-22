import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { MainItems } from './MainItems'
import { MenuItems2 } from './MenuItems2'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import './Navbar.css'
import { Button } from './Button'
import './estilos.css'
import { useAuth0 } from '@auth0/auth0-react'

export const Log = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const { logout } = useAuth0()
  const { user } = useAuth0()

  return (
    <>
      {!isAuthenticated ? (
        <>
          {MainItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
          <Button
            className='nav-btn'
            onClick={() => {
              loginWithRedirect()
            }}
          >
            Log In
          </Button>
        </>
      ) : (
        <>
          {user.email == 'ksbohorquezl@gmail.com' && 'caicedoruize@gmail.com'
            ? MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            : user.email == 'dantaliondec@gmail.com' &&
              'daniprogra91@gmail.com' &&
              'Vdrey@misena.edu.co'
            ? MenuItems2.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            : logout() || alert('No esta autenticado')}

          <Button
            className='nav-btn'
            onClick={() => {
              logout()
            }}
          >
            Log Out
          </Button>
          {/* <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>  */}
        </>
      )}
    </>
  )
}

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
          <Log />
        </ul>
      </nav>
    )
  }
}

export default Navbar
