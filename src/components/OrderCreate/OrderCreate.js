/* CREATE - CREATE A NEW ORDER */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link, Redirect } from 'react-router-dom'
import { orderCreate } from '../../api/orders'

const OrderCreate = props => {
  const [order, setOrder] = useState({ product: null, total: null })
  const user = props.user

  /*
  // when an input changes, update the state that corresponds with the input's name (ex: form changes)
  const handleChange = event => {
    event.persist()
    // ensures the properties are not set to null after handleChange is finished
    setOrder()
  }
*/

  const handleSubmit = event => {
    event.preventDefault()

    orderCreate(order, user) // axios call to API
      .then(res => setOrder(res.data.order))
      .catch(console.error())
  }

  // if (order) { // if value is not null
  //   return <Redirect to={'/orders'} />
  // }

  return (
    <div>
      <Link to='/create-order'>
        <button onSubmit={handleSubmit} type='submit' className='btn btn-primary'>Purchase</button>
      </Link>
    </div>
  )
}

export default OrderCreate
