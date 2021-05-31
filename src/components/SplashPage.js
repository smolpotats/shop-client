import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (
    <Container className='wrapper'>
      <Link to='/products'>
        <Image
          src='/images/bodega.png'
          fluid
          className='splash'
        />
      </Link>
    </Container>
  )
}

export default SplashPage
