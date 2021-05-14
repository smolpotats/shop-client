import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { orderDelete } from '../../api/orders'

const OrderDelete = (props) => {
  const [order, setOrder] = useState([])
  // const [isDeleted, setIsDeleted] = useState(false)
  const { msgAlert, user } = props

  orderDelete(user, order) // axios call to API
    // .then(setIsDeleted(true))
    .then(() =>
      msgAlert({
        heading: 'Order Canceled!',
        message: 'Your order has been canceled!',
        variant: 'success'
      }))
    .then(<Redirect to='/orders'/>)
    .catch(error => {
      setOrder([])
      msgAlert({
        heading: 'Coudn\'t cancel your order!',
        message: 'Could not cancel order with error: ' + error.message,
        variant: 'danger'
      })
    })
  return (
    <OrderDelete />
  )
}

export default withRouter(OrderDelete)
