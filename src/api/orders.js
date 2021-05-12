import apiUrl from '../apiConfig'
import axios from 'axios'

// view all orders
export const orderIndex = (user) => {
  return axios({
    url: apiUrl + '/orders',
    method: 'GET',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

// create a new order
export const orderCreate = (order, user) => {
  return axios({
    url: apiUrl + '/orders',
    method: 'POST',
    headers: { 'Authorization': `Token token=${user.token}` },
    data: { order }
  })
}

// delete an order
export const orderDelete = (id, user) => {
  return axios({
    url: apiUrl + '/orders' + id,
    method: 'DELETE',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

/*
// view one order
export const orderShow = (id, user) => {
  return axios({
    url: apiUrl + '/orders/' + id,
    method: 'GET',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

// update an order - complete order
export const orderUpdate = (id, order, user) => {
  return axios({
    url: apiUrl + '/orders' + id,
    method: 'PATCH',
    headers: { 'Authorization': `Token token=${user.token}` },
    data: { order }
  })
}
*/
