/* SHOW - VIEW A SINGLE PRODUCT */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { productShow } from '../../api/products'
import OrderCreate from '../OrderCreate/OrderCreate'

const ProductShow = props => {
  console.log('props is', props)
  const [product, setProduct] = useState(null)

  // !!!! or here?
  const handleSubmit = event => {
    return (
      <OrderCreate
        product={product.id}
      />
    )
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
      <Link to='/create-order'>
        <button onSubmit={handleSubmit} type='submit' className='btn btn-primary'>Purchase</button>
        <button type='submit' className='btn btn-primary'>Purchase</button>
      </Link>
    </div>
  )
}

export default ProductShow
