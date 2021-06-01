import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import { orderDelete } from '../../api/orders'

const OrderDelete = (props) => {
  const [orderId, setOrderId] = useState(props.orderId)
  // const [isDeleted, setIsDeleted] = useState(false)
  const { msgAlert, user } = props

  const handleSubmit = (event) => {
    orderDelete(orderId, user) // axios call to API
      // .then(setIsDeleted(true))
      .then(() =>
        msgAlert({
          heading: 'Order Canceled!',
          message: 'Your order has been canceled!',
          variant: 'success'
        }))
      .then(setOrderId(''))
      // .then(<Redirect to='/orders'/>)
      .catch(error => {
        msgAlert({
          heading: 'Coudn\'t cancel your order!',
          message: 'Could not cancel order with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  return (
    <button onClick={handleSubmit}>Delete Order!</button>
  )
}

export default OrderDelete
