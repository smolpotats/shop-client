/* CREATE - CREATE A NEW ORDER */

import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
// import { Link } from 'react-router-dom'
// import { Link, Redirect } from 'react-router-dom'
import { orderCreate } from '../../api/orders'

const OrderCreate = props => {
  const [order, setOrder] = useState({ product: null, total: null })
  const user = props.user

  const handleSubmit = event => {
    event.preventDefault()

    orderCreate(order, user) // axios call to API
      .then(res => setOrder(res.data.order))
      .catch(console.error())
  }

  // if (order) { // if value is not null
  //   return <Redirect to={'/orders'} />
  // }

  return (
    // make order form component
    // <OrderForm />
    <StripeCheckout
      stripeKey='idk_what_this_is_yet'
      token={handleSubmit}
      name='Shop Name'
      description='Enter your information to place order:'
      // image=''
      // ComponentClass='div'
      label='Purchase'
      // panelLabel='gib monie'
      // amount={product.price}

    />
  )
}

export default OrderCreate
