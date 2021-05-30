/* CREATE - CREATE A NEW ORDER */

// DOESNT WORK IDK I SORRY I TRIED

// import React, { Fragment } from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// // import { Link } from 'react-router-dom'
// // import { Link, Redirect } from 'react-router-dom'
// import { orderCreate } from '../../api/orders'
// // import OrderForm from '../OrderForm/OrderForm'
// import { Button } from 'react-bootstrap'
// import messages from '../AutoDismissAlert/messages'
//
// const OrderCreate = props => {
//   // const [order, setOrder] = useState({ product: null, total: null })
//   const { user, msgAlert, product } = props
//
//   const handleSubmit = event => {
//     const order = {
//       product: product,
//       total: product.price,
//       isComplete: true,
//       owner: props.user
//     }
//     orderCreate(order, props.user) // axios call to API
//       .then(() => msgAlert({
//         heading: 'Order created successfully',
//         message: messages.orderCreateSuccess,
//         variant: 'success'
//       }))
//       .catch(error => {
//         msgAlert({
//           heading: 'Order not created: ' + error.message,
//           message: messages.orderCreateFailure,
//           variant: 'danger'
//         })
//       })
//   }
//
//   // if (order) { // if value is not null
//   //   return <Redirect to={'/orders'} />
//   // }
//   if (!user) {
//     return (<Button>Purchase!</Button>)
//   }
//   return (
//     <Fragment>
//       <StripeCheckout
//         stripeKey='pk_test_51IqqKJKXj9MQ2P30LfUswrjlWAjmeliPtwsVjLkWpDOn7XyGB6gxGWpOBYRLd4nzQ4oUVfQqjwL3I4O1z02i5mSD00adfFo50i'
//         token={handleSubmit}
//         name='Beaux Degas'
//         description='Enter your information to place order:'
//         // image=''
//         // ComponentClass='div'
//         label='Purchase'
//         // shippingAddress
//         billingAddress={false}
//         // panelLabel='gib monie'
//         // amount={product.price}
//       />
//     </Fragment>
//   )
// }
//
// export default OrderCreate
