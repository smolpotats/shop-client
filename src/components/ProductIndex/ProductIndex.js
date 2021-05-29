/* INDEX - VIEW ALL PRODUCTS */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardDeck, Container, Image } from 'react-bootstrap'
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
        <Image
          src={`/images/products/${product.image}`}
          alt={product.name}
        />
        <Card.Title>{product.name}</Card.Title>
        <Card.Footer>$ {product.price}</Card.Footer>
      </Card>
    </Link>
  ))

  return (
    <Container>
      <CardDeck>
        {listProducts}
      </CardDeck>
    </Container>
  )
}

export default ProductIndex
