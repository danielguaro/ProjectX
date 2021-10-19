import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
// Projects
import SeeProduct from './Components/See Products/ProductApp'
import UserAdmin from './Components/Users/UserApp'
import SeeSell from './Components/See Sells/SellApp'
import ProductAdmin from './Components/Product Admin/ProductApp'
import SellAdmin from './Components/Sell Admin/SellAdmin'
import Navbar from './Components/Navbar/Navbar'
import PageNotFound from './Components/PageNotFound'
import HomeApp from './Components/LoggedHome/HomeApp'
import Login from './Login/Login'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeApp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/seeProduct' component={SeeProduct} />
        <Route exact path='/seeSell' component={SeeSell} />
        <Route exact path='/productAdmin' component={ProductAdmin} />
        <Route exact path='/sellAdmin' component={SellAdmin} />
        <Route exact path='/userAdmin' component={UserAdmin} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App

