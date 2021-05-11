/* SHOW - VIEW A SINGLE PRODUCT */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderCreate from '../OrderCreate/OrderCreate'
// import productData from '../../data/products'

const Product = (props) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/products/${props.match.params.id}`)
      .then(res => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <div key={product._id} className='show-product-item'>
      <img src={process.env.PUBLIC_URL + `images/${product.id}.jpg`}/>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <h5>$ {product.price}</h5>
      <Link to='/products'>
        <button className='btn btn-primary'>Back to all products</button>
      </Link>
      <Link to='/create-order'>
        <OrderCreate
          product={product._id}
          total={product.price}
        />
      </Link>
    </div>
  )
}

export default Product
