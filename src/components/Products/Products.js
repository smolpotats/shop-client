/* INDEX - VIEW ALL PRODUCTS */
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import productData from '../../data/products'

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // axios(`${apiUrl}/products`)
    //   .then(res => setProducts(res.data.products))
    //   .catch(console.error)
    setProducts(productData)
  })

  const listProducts = products.map(product => (
    <li key={product._id} className='list-products-item'>
      {product.title}
    </li>
  ))

  return (
    <div>
      {listProducts}
    </div>
  )
}

export default Products
