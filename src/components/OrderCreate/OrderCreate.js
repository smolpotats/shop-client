/* CREATE - CREATE A NEW ORDER */

import React, { useState } from 'react'
import { orderCreate } from '../../api/orders'

const OrderCreate = props => {
  const [order, setOrder] = useState({ product: '', total: '' })
  const user = props.user
  const msgAlert = props.msgAlert

  // when an input changes, update the state that corresponds with the input's name (ex: form changes)
  const handleChange = event => {
    event.persist()
    // ensures the properties are not set to null after handleChange is finished
    setOrder()
  }

  // if user has any open orders, add product to cart

  const handleSubmit = event => {
    event.preventDefault()
    // axios call to API
    orderCreate(order, user)
      .then(res => setOrder(res.data.order))
      .then(res => msgAlert({
        heading: 'Created Movie Successfully',
        message: `Movie has been created successfully. Now viewing ${res.data.movie.title}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Movie',
          message: 'Could not create movie with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  return (
    <div></div>
  )
}

export default OrderCreate
