import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import OrdersIndex from './components/OrdersIndex/OrdersIndex'
import OrderCreate from './components/OrderCreate/OrderCreate'
import OrderUpdate from './components/OrderUpdate/OrderUpdate'
// import OrderDelete from './components/OrderDelete/OrderDelete'
import OrderShow from './components/OrderShow/OrderShow'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  // set the user state to the passed in user
  setUser = user => this.setState({ user })
  // reset the user state back to null (signing out our user)
  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      // set the msgAlerts state to all the msgAlerts but without the one with the id that matched the id passed in the parameter
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      // set the msgAlerts state to be a new array ([]) with all of the msgAlerts from the current state (...state.msgAlerts) and a new message alert object using the heading, message, variant, and id provided => ({ heading, message, variant, id })
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    // destructure the msgAlerts and user state
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <header className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
        </header>
        <main>
          {/* View all products | index */}
          <Route exact path ='/' component={Products} />
          <Route exact path='/products' component={Products} />

          {/* View a single product | show */}
          <Route exact path='/products/:id' component={Product} />

          {/* View all orders | index */}
          <AuthenticatedRoute user={user} exact path='/orders' render={() => (
            <OrdersIndex msgAlert={this.msgAlert} user={user} />
          )} />

          {/* View a single order | show */}
          <AuthenticatedRoute user={user} exact path='/orders/:id' render={() => (
            <OrderShow msgAlert={this.msgAlert} user={user} />
          )} />

          {/* Create a new order | create */}
          <AuthenticatedRoute user={user} path='/create-order' render={() => (
            <OrderCreate msgAlert={this.msgAlert} user={user} />
          )} />

          {/* Update an existing order | update */}
          <AuthenticatedRoute user={user} path='/orders/:id/edit' render={() => (
            <OrderUpdate msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
