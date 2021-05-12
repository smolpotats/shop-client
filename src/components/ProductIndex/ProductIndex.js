/* INDEX - VIEW ALL PRODUCTS */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import { productIndex } from '../../api/products'

const ProductIndex = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productIndex() // axios request
      .then(res => setProducts(res.data.products))
      .catch(console.error)
  }, [])

  const listProducts = products.map(product => (
    <Link to={`/products/${product.id}`} key={product.id} id={product.id}>
      <Card >
        {/* <img src={process.env.PUBLIC_URL + `images/${product.id}.jpg`}/> */}
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          $ {product.price}
        </Card.Body>
      </Card>
    </Link>

  ))

  return (
    <CardColumns>
      {listProducts}
    </CardColumns>
  )
}

export default ProductIndex
