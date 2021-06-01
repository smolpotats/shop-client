/* INDEX - VIEW ALL ORDERS */

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, CardColumns, Image, Button } from 'react-bootstrap'

import OrderUpdate from '../OrderUpdate/OrderUpdate'
import { orderIndex, orderDelete } from '../../api/orders'
// import { productShow } from '../../api/products'

const OrderIndex = (props) => {
  const [orders, setOrders] = useState([])
  const { msgAlert, user } = props

  useEffect(() => {
    orderIndex(user) // axios request
      .then(res => {
        // await res.data.orders.forEach(async order => {
        // for (const order of res.data.orders) {
        //   const product = await productShow(order.product, user)
        //   order.product = product
        // }
        setOrders(res.data.orders)
      })

      // .then(setOrders(res.data.orders))
      .then(() => {
        msgAlert({
          heading: 'Loaded Order History',
          message: 'Loaded all Orders!',
          variant: 'success'
        })
      })

      .catch(error => {
        setOrders([])
        msgAlert({
          heading: 'Failed to Load Orders!',
          message: 'Could not load orders with error: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = event => {
    const orderId = event.target.id
    orderDelete(orderId, user) // axios call to API
      .then(() => {
        msgAlert({
          heading: 'Order Canceled!',
          message: 'Your order has been canceled!',
          variant: 'success'
        })
      })
      // updates orders array
      .catch(error => {
        msgAlert({
          heading: 'Coudn\'t cancel your order!',
          message: 'Could not cancel order with error: ' + error.message,
          variant: 'danger'
        })
      })
      .then(() => {
        const updatedOrders = orders.filter((order) => order._id !== orderId)
        setOrders(updatedOrders)
      })
      .catch(error => {
        msgAlert({
          heading: 'Your order was deleted!',
          message: 'But we\'re too shy to show you...UwU: ' + error.message,
          variant: 'danger'
        })
      })
  }
  // shipping types: overnight, express, standard, pickup
  const orderCards = orders.map(order => {
    // search database for product info for each order

    return (
      <Card key={order._id}>
        <Card.Header className='order-id'>Order #: {order._id}</Card.Header>
        <Card.Body>
          <Card.Title>{order.product.name}</Card.Title>
          <Link to={`/products/${order.product}`}>
            <Image src={order.product.image ? require(`../../images/products/${order.product.image}`) : null} alt={order.product.name}/>
          </Link>

          <OrderUpdate
            order={order}
            user={user}
            msgAlert={msgAlert}
          />
          <Button onClick={handleDelete} id={order._id}>Delete Order!</Button>

        </Card.Body>
        <Card.Footer>Total: ${order.total}</Card.Footer>
      </Card>
    )
  })

  return (
    <CardColumns>
      {orderCards}
    </CardColumns>
  )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders
export default withRouter(OrderIndex)
