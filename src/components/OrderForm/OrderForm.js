import React from 'react'
import { Link } from 'react-router-dom'

const OrderForm = ({ order, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>First Name</label>
    <input
      placeholder="First Name"
      value={order.name}
      name="firstName"
      onChange={handleChange}
    />

    <label>Last Name</label>
    <input
      placeholder="Last Name"
      value={order.title}
      name="lastName"
      onChange={handleChange}
    />

    <label>Address</label>
    <input
      placeholder="Address"
      value={order.author}
      name="address"
      onChange={handleChange}
    />

    <label>Apt</label>
    <input
      placeholder="Apt."
      value={order.author}
      name="apt"
      onChange={handleChange}
    />

    <label>City</label>
    <input
      placeholder="City"
      value={order.author}
      name="city"
      onChange={handleChange}
    />

    <label>State</label>
    <input
      placeholder="State"
      value={order.author}
      name="state"
      onChange={handleChange}
    />

    <label>Zip</label>
    <input
      placeholder="Zip"
      value={order.author}
      name="zip"
      onChange={handleChange}
    />

    <label>Country</label>
    <input
      placeholder="Country"
      value={order.author}
      name="country"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default OrderForm
