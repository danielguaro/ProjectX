import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Route, Redirect } from 'react-router'

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { isAuthenticated } = useAuth0()

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

export default ProtectedRoute
