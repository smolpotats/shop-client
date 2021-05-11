# Brainstorming

## Models
### Product:
- _id: ObjectId
- name: string
- price: number
- description: string
- images: array of image urls (different sizes, thumbnails)

### User:
- _id: ObjectId
- email: string
- password: string
- username: string
- order history: array of order ids
- token: string generated on sign-in

### Orders:
- _id: ObjectId
- products: array of { productId, quantity}
- subtotal: number
- isComplete: boolean

## Routes
### Products
| Method | Route | Action |
| ------ | ----- | ------ |
| GET | /products | list all products for sale |
| GET | /products/:id | show product details by id |

### Orders
| Method | Route | Action |
| ------ | ----- | ------ |
| GET | /orders | list order history |
~~| GET | /orders/:id | view order details by id |~~
| POST | /orders | create new order |
~~| PATCH | /orders/:id | add or delete items to order |~~
| DELETE | /orders/:id | delete order |

### Auth
| Method | Route | Action |
| ------ | ----- | ------ |
| POST | /sign-up | register a new user account |
| POST  | /sign-in | sign-in to account and generate user token |
| DELETE | /sign-out | sign-out user and delete token |
| PATCH | /change-password  | change user password  |


## Schedule
#### Monday 5/10
- [x] Deploy API to Heroku
- [x] Deploy to Github pages

#### Tuesday 5/11
- [x] Auth - Backend
- [x] Create `Product` schema
- [x] Create `Order` schema
- [ ] Create new order
- [ ] View all orders
- [ ] Delete a order

#### Wednesday 5/12
- [ ] Start integrating Stripe

#### Thursday 5/13
- [ ] Stripe!
- [ ] Finish `README`
- [ ] Styling

#### Friday 5/14
- [ ] Present!!
