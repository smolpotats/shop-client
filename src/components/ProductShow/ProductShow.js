/* SHOW - VIEW A SINGLE PRODUCT */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { Button, Container, Spinner, Card, Image } from 'react-bootstrap'
import { productShow } from '../../api/products'
import { orderCreate } from '../../api/orders'
import messages from '../AutoDismissAlert/messages'
// import OrderCreate from '../OrderCreate/OrderCreate'

const ProductShow = (props) => {
  const [product, setProduct] = useState(null)
  // console.log('product is: ', product)
  // console.log('state is: ', this.state)

  const handleSubmit = event => {
    // event.preventDefault()
    // console.log('event', event)
    // console.log('this is porps', props)
    const { msgAlert } = props
    const order = {
      product: product,
      total: product.price,
      isComplete: true,
      owner: props.user
    }
    orderCreate(order, props.user) // axios call to API
      .then(() => msgAlert({
        heading: 'Order created successfully',
        message: messages.orderCreateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Order not created: ' + error.message,
          message: messages.orderCreateFailure,
          variant: 'danger'
        })
      })
  }

  useEffect(() => {
    event.preventDefault()
    productShow(props.match.params.id) // axios request
      .then(res => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  // if a product did not load, show the loading animation
  if (!product) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  const productHtml = (
    <Card key={product.id}>
      <Image
        src={`/images/${product.id}.png`}
        alt={product.name}
      />
      <Card.Title>{product.name}</Card.Title>
      <Card.Footer>$ {product.price}</Card.Footer>
      {/* <OrderCreate /> */}
      { props.user
        ? <StripeCheckout
          stripeKey='pk_test_51IqqKJKXj9MQ2P30LfUswrjlWAjmeliPtwsVjLkWpDOn7XyGB6gxGWpOBYRLd4nzQ4oUVfQqjwL3I4O1z02i5mSD00adfFo50i'
          token={handleSubmit}
          name='Beaux Degas'
          description='Enter your information to place order:'
          // image=''
          // ComponentClass='div'
          label='Purchase'
          shippingAddress
          billingAddress={false}
        // panelLabel='gib monie'
        // amount={product.price}
        />
        : <Link to="/sign-in">
          <Button>Purchase!</Button>
        </Link> }
    </Card>
  )

  return (
    <Container>
      {productHtml}
    </Container>
  )
}

export default ProductShow
