/* SHOW - VIEW A SINGLE PRODUCT */

import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import Spinner from 'react-bootstrap/Spinner'
import { productShow } from '../../api/products'
// import OrderCreate from '../OrderCreate/OrderCreate'
import { orderCreate } from '../../api/orders'
import messages from '../AutoDismissAlert/messages'

const ProductShow = (props) => {
  console.log('props is', props)

  const [product, setProduct] = useState(null)
  console.log('product is: ', product)
  console.log('state is: ', this.state)
  // !!!! or here?
  // const handleSubmit = event => {
  //   return (
  //     <OrderCreate
  //       product={product.id}
  //     />
  //   )
  // }

  const handleSubmit = event => {
    // event.preventDefault()
    console.log('event', event)
    console.log('this is porps', props)
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

  if (!product) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  return (
    <div key={product.id}>
      {/* <img src={process.env.PUBLIC_URL + `images/${product._id}.jpg`}/> */}
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <h5>$ {product.price}</h5>
      {/* !!!!!!! */}
      {/* figure out how to link or get pop up? */}
      {/*
        <Link to='/create-order'>
          <button onSubmit={handleSubmit} type='submit' className='btn btn-primary'>Purchase</button>
        </Link>
      */}
      <StripeCheckout
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
    </div>
  )
}

export default ProductShow
