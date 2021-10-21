import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import React, { useState } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
import { useAuth0 } from '@auth0/auth0-react'

// Projects
import SeeProduct from './Components/See Products/ProductApp'
import UserAdmin from './Components/Users/UserApp'
import SeeSell from './Components/See Sells/SellApp'
import ProductAdmin from './Components/Product Admin/ProductApp'
import SellAdmin from './Components/Sell Admin/SellAdmin'
import Navbar from './Components/Navbar/Navbar'
import PageNotFound from './Components/PageNotFound'
import HomeApp from './Components/LoggedHome/HomeApp'
import Loading from './Components/loading'

function App() {
  const { isAuthenticated } = useAuth0()
  const { isLoading } = useAuth0()

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeApp} />
          {isLoading && <Loading />}
          {isAuthenticated && (
            <>
              <ProtectedRoute exact path='/seeProduct' component={SeeProduct} />
              <ProtectedRoute exact path='/seeSell' component={SeeSell} />
              <ProtectedRoute
                exact
                path='/productAdmin'
                component={ProductAdmin}
              />
              <ProtectedRoute exact path='/sellAdmin' component={SellAdmin} />
              <ProtectedRoute exact path='/userAdmin' component={UserAdmin} />
            </>
          )}
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
