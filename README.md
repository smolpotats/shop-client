# Shop-Project-Client
##### Amalia Advincula-Roye, Elaine Chan, Kristian Llano

## Front-End Application
A user-based e-commerce application that allows users to browse and purchase
items. This repository is the client application which utilizes Bootstrap, HTML
with SCSS and Javascript, and React. The api application utilizes Express API
web framework and Mongoose to connect to MongoDB to view and track user orders.
Stripe Checkout is used to process and validate the user's payment.

## Deployed Websites
The front-end of the application is deployed on [Github Pages](https://smolpotats.github.io/shop-client/#/)
and the repository is on [Github](https://github.com/smolpotats/shop-client).

The back-end of the application is deployed on [Heroku](https://sheltered-hollows-93867.herokuapp.com/)
and the repository is deployed on [Github](https://github.com/smolpotats/shop-serverhttps://github.com/smolpotats/shop-server).

## Project Planning
### User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As an unregistered user, I would like to see all of the products.
- As a signed in user, I would like to add and remove products from a shopping cart.
- As a signed in user, I would like to see all my past orders.
- As a signed in user, I would like to purchase products in a shopping cart using Stripe with react https://github.com/azmenak/react-stripe-checkout

### Wireframes
* [Updated Wireframe](https://imgur.com/WgI8y5t.png)
* [Original Wireframe 1](https://imgur.com/qq6Vy7Q.png)
* [Original Wireframe 2](https://imgur.com/gjGXVAw.png)

### Strategy
As a team, we initially utilized [projects boards](https://github.com/orgs/smolpotats/projects/2) on Github to help prioritize and organize our work. Daily, we had
stand-up meetings that consisted of updating the other team members on previous
work done and any blockers that we may have occurred or anticipate.

## Technologies Used
Technology    | Front-End | Back-End |
:-----------: | :-------: | :------: |
**HTML**      | X         |          |
**CSS/SCSS**  | X         |          |
**Javascript**| X         | X        |
**Axios**     | X         |          |
**Bootstrap** | X         |          |
**React**     | X         |          |
**Express**   |           | X        |
**Mongoose**  |           | X        |
**MongoDB**   |           | X        |
**Stripe**    | X         | **       |

* **Stripe is used on our front-end and we utilize Stripe's authentication server.

## Next Development & Reach Goals
- Build a search feature so that people can search for specific products by name.
- For security purposes, only allow existing admin accounts the ability to
  create other admin accounts.
- Have an inventory/stock status on products to know if the product is in stock.
- Include Mongoose `populate` to have the full `product` object on each `order`.
