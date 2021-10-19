import React, { Component, useState } from 'react'
import { MenuItems } from './MenuItems'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import './Navbar.css'
import { Button } from './Button'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const LogBtn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState(false)
  Axios.defaults.withCredentials = true
  const history = useHistory()
  const { logout } = useAuth0()

  const login = () => {
    Axios.post('http://localhost:3010/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false)
      } else {
        localStorage.setItem('token', response.data.token)
        setLoginStatus(true)
      }
    })
  }

  const handleLogin = () => {
    history.push('/login')
  }

  return (
    <>
      {loginStatus ? (
        <Button className='nav-btn' onClick={handleLogin}>
          Log In
        </Button>
      ) : (
        <Button>Log Out</Button>
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
        <LogBtn />
      </nav>
    )
  }
}

export default Navbar
