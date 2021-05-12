/* INDEX - VIEW ALL ORDERS */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, Card, Button } from 'react-bootstrap'
import { orderIndex } from '../../api/orders'

const OrderIndex = (props) => {
  const [orders, setOrders] = useState([])
  const { msgAlert, user } = props

  useEffect(() => {
    orderIndex(user)
      .then(res => {
        setOrders({ orders: res.data.orders })
      })
      .then(() =>
        msgAlert({
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
  }, [])

  if (!orders) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  const listOrders = orders.map(order => (
    <Card key={order.id}>
      <Card.Header>Order #: {order.id}</Card.Header>
      <Card.Body>
        <Link to={`/products/${order.product}`}>{order.product}</Link>
        <Button>Cancel Order</Button>
        Total: ${order.total}
      </Card.Body>
    </Card>
  ))

  return (
    <div className='list-orders'>
      {listOrders}
    </div>
  )
}

export default OrderIndex
