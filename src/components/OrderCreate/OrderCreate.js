/* CREATE - CREATE A NEW ORDER */

import React, { useState } from 'react'
import { orderCreate } from '../../api/orders'

const OrderCreate = props => {
  const [order, setOrder] = useState({ product: '', total: '' })
  const user = props.user

  const handleChange = event => {
    event.persist()
    // ensures the properties are not set to null after handleChange is finished
  }

  const handleSubmit = event => {
    event.preventDefault()
    orderCreate(order, user)
      .then(res => setOrder(res.data.order))
      .catch(console.error)
  }

  return (
    <div></div>
  )
}

export default OrderCreate
