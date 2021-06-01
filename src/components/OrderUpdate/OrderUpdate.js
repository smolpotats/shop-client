/* UPDATE - CHANGE DELIVERY */
import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import { orderUpdate } from '../../api/orders'

const OrderUpdate = (props) => {
  // destructure props sent from orderIndex
  const { user, msgAlert } = props
  // should be an object
  const [order, setOrder] = useState(props.order)

  // when an option is selected
  const handleChange = (event) => {
    event.persist()
    setOrder(() => {
      order.deliveryType = event.target.value
      return order
    })
    // order.deliveryType = event.target.value
    // setOrder(order)
  }

  // when update is pressed
  const handleSubmit = (event) => {
    event.preventDefault()
    orderUpdate(order._id, order, user)
      .then(() =>
        msgAlert({
          heading: 'Updated!',
          message: 'Updated your order!',
          variant: 'success'
        }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Update Order!',
          message: 'Whoops. Our bad. Could not load orders with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} controlId='formOrderShipping'>
          <Form.Label>Shipping Speed</Form.Label>
          <Form.Control as='select'
            defaultValue={order.deliveryType}
            name='deliveryType'
            onChange={handleChange}>

            <option value='standard'>Standard</option>
            <option value='express'>Express</option>
            <option value='overnight'>Overnight</option>

          </Form.Control>
          <Button type='submit'>Update Order</Button>
        </Form.Group>
      </Form>

    </React.Fragment>
  )
}

export default OrderUpdate
