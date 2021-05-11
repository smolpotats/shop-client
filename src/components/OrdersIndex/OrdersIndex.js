/* INDEX - VIEW ALL ORDERS */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { orderIndex } from '../../api/orders'

const OrdersIndex = props => {
  // orders is an empty array
  const [orders, setOrders] = useState([])
  const { msgAlert, user } = this.props

  orderIndex(user)
    .then(res => setOrders({ orders: res.data.orders }))
    .then(() => msgAlert({
      heading: 'Loaded Order History',
      message: 'All orders found!',
      variant: 'success'
    }))
    .catch(error => {
      msgAlert({
        heading: 'Failed to Load Orders!',
        message: 'Could not load orders with error: ' + error.message,
        variant: 'danger'
      })
    })

  if (!orders) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  const listOrders = orders.map(order => (
    <div key={order._id} className='list-orders-item'>
      Order #: <Link to={`/orders/${order._id}`}>{order._id}</Link>
      Date: {order.dateCompleted}
      <Link to={`/products/${order.product._id}`}>{order.product}</Link>
      Total: ${order.total}
    </div>
  ))

  return (
    <div className='list-orders'>
      {listOrders}
    </div>
  )
}

export default OrdersIndex
