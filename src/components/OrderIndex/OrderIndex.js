/* INDEX - VIEW ALL ORDERS */

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, CardColumns, Image, Form, Row } from 'react-bootstrap'
// import OrderDelete from '../OrderDelete/OrderDelete'
import { orderIndex } from '../../api/orders'

const OrderIndex = (props) => {
  const [orders, setOrders] = useState([])
  const { msgAlert, user } = props

  useEffect(() => {
    orderIndex(user) // axios request
      .then(res => {
        console.log(res)
        setOrders(res.data.orders)
      })
      .then(() =>
        msgAlert({
          heading: 'Loaded Order History',
          message: 'Loaded all Orders!',
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

  // shipping types: overnight, express, standard, pickup
  const orderCards = orders.map(order => (
    <Card key={order._id}>
      <Card.Header className='order-id'>Order #: {order._id}</Card.Header>
      <Card.Body>
        <Link to={`/products/${order.product}`}>
          <Image src={`/images/${order.product}.png`} alt='product image' />
        </Link>

        <Form>
          <Form.Group as={Row} controlId='formOrderShipping'>
            <Form.Label>Shipping Speed</Form.Label>
            <Form.Control as='select' defaultValue={order.shipping}>
              <option>Standard</option>
              <option>Express</option>
              <option>Overnight</option>
            </Form.Control>
          </Form.Group>
        </Form>
        Total: ${order.total}
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  ))

  return (
    <CardColumns>
      {orderCards}
    </CardColumns>
  )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders
export default withRouter(OrderIndex)
