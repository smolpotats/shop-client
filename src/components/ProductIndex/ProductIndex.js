/* INDEX - VIEW ALL PRODUCTS */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { productIndex } from '../../api/products'

const ProductIndex = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productIndex() // axios request
      .then(res => setProducts(res.data.products))
      .catch(console.error)
  }, [])

  const listProducts = products.map(product => (
    <Link to={`/products/${product.id}`} key={product.id} id={product.id} product={product}>
      <Card>
        <Card.Img src={`/images/${product.id}.png`} alt={product.name} variant="top" />
        <Card.Title>{product.name}</Card.Title>
        <Card.Footer>$ {product.price}</Card.Footer>
      </Card>
    </Link>
  ))

  return (
    <CardDeck>
      {listProducts}
    </CardDeck>
  )
}

export default ProductIndex
