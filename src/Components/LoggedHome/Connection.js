import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Projects
import SeeProduct from '../See Products/ProductApp'
import UserAdmin from '../Users/UserApp'
import SeeSell from '../See Sells/SellApp'
import ProductAdmin from '../Product Admin/ProductApp'
import SellAdmin from '../Sell Admin/SellAdmin'
import Navbar from '../Navbar/Navbar'
import PageNotFound from '../PageNotFound'
import HomeApp from './HomeApp'
import Script from '../../Login/Script'

const Connection = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => <Script />} />
        <Route exact path='/home' component={() => <HomeApp />} />
        <Route exact path='/seeProduct' component={() => <SeeProduct />} />
        <Route exact path='/seeSell' component={() => <SeeSell />} />
        <Route exact path='/productAdmin' component={() => <ProductAdmin />} />
        <Route exact path='/sellAdmin' component={() => <SellAdmin />} />
        <Route exact path='/userAdmin' component={() => <UserAdmin />} />
        <Route exact path='*' component={() => <PageNotFound />} />
      </Switch>
    </Router>
  )
}

export default Connection
