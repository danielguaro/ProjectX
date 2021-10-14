import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Script = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <main>
      <div className='contenedor__todo'>
        <div className='caja__trasera'>
          <div className='caja__trasera-register'>
            <h3>Log In</h3>
            <p>To Log in with auth0, press the next button</p>

            <Link
              style={{ opacity: 1, display: 'flex', textDecoration: 'none' }}
              to='/home'
            >
              <Button style={{ opacity: 1 }} >
                Login Auth0
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Script
