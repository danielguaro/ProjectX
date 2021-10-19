import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeApp from '../Components/LoggedHome/HomeApp'
import './estilos.css'

const Login = () => {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState(false)

  Axios.defaults.withCredentials = true

  const register = () => {
    Axios.post('http://localhost:3002/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response)
    })
  }

  const login = () => {
    Axios.post('http://localhost:3002/login', {
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

  const userAutenticated = () => {
    Axios.get('http://localhost:3002/isUserAuth', {
      headers: {
        'x-acces-token': localStorage.getItem('token'),
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <main>
      <div className='contenedor__todo'>
        <div>
          <h1>Registration</h1>
          <label>Username</label>
          <input
            type='text'
            onChange={(e) => {
              setUsernameReg(e.target.value)
            }}
          />
          <label>Password</label>
          <input
            type='text'
            onChange={(e) => {
              setPasswordReg(e.target.value)
            }}
          />
          <button onClick={register}>Register</button>
        </div>

        <div className='contenedor__login-register'>
          <form action='' className='formulario__login'>
            <h2>Log In</h2>
            <input
              type='text'
              placeholder='Username...'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <input
              type='password'
              placeholder='Password...'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <button className='form-btn' onClick={login}>
              Log In
            </button>
          </form>

          {
            loginStatus && (
              <Router>
                <Switch>
                  <Route exact path='/' component={() => <HomeApp />} />
                </Switch>
              </Router>
            )
            //  : (
            //   <Router>
            //     <Switch>
            //       <Route exact path='/' component={() => <HomeApp />} />
            //     </Switch>
            //   </Router>
            // )
          }
        </div>
      </div>
    </main>
  )
}

export default Login
