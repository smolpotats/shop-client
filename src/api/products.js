import apiUrl from '../apiConfig'
import axios from 'axios'

// view all products
export const productIndex = user => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}

// view a single product
export const productShow = (id, user) => {
  return axios({
    url: apiUrl + '/products/' + id,
    method: 'GET'
  })
}
