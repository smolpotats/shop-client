/* INDEX - VIEW ALL ORDERS */

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, CardColumns, Image } from 'react-bootstrap'
// import OrderDelete from '../OrderDelete/OrderDelete'
import { orderIndex } from '../../api/orders'

const OrderIndex = (props) => {
  const [orders, setOrders] = useState([])
  const { msgAlert, user } = props

  useEffect(() => {
    orderIndex(user) // axios request
      .then(res => { setOrders(res.data.orders) })
      .then(() =>
        msgAlert({
          heading: 'Loaded Order History',
          message: 'All orders found!',
          variant: 'success'
        }))
      .catch(error => {
        setOrders([])
        msgAlert({
          heading: 'Failed to Load Orders!',
          message: 'Could not load orders with error: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])

  const listOrders = orders.map(order => (
    <Card key={order.id}>
      <Card.Header>Order #: {order.id}</Card.Header>
      <Card.Body>
        <Link to={`/products/${order.product}`}>
          <Image src={`/images/${order.product}.png`} alt='product image' />
        </Link>
        {/*        <Link to='/delete-order'>
          <Button order={order}>Cancel Order <OrderDelete order={order} /></Button>
        </Link> */}
        Total: ${order.total}
      </Card.Body>
    </Card>
  ))

  return (
    <CardColumns>
      {listOrders}
    </CardColumns>
  )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders
export default withRouter(OrderIndex)
