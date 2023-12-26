import axios from 'axios'
import { config } from '../../Constants'
import { parseJwt } from './Helpers'

export const estateApi = {
  authenticate,
  signup,
  numberOfUsers,
  numberOfEstates,
  getUsers,
  deleteUser,
  getEstates,
  deleteEstate,
  addEstate
}

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function numberOfUsers() {
  return instance.get('/public/numberOfUsers')
}

function numberOfEstates() {
  return instance.get('/public/numberOfEstates')
}

function getUsers(user, username) {
  const url = username ? `/api/users/${username}` : '/api/users'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteUser(user, username) {
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getEstates(user, text) {
  const url = text ? `/api/estates?text=${text}` : '/api/estates'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteEstate(user, id) {
  return instance.delete(`/api/estates/${id}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function addEstate(user, estate) {
  return instance.post('/api/estates', estate, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user)
    }
  })
}

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

instance.interceptors.request.use(function (config) {
  // If token is expired, redirect user to login
  if (config.headers.Authorization) {
    const token = config.headers.Authorization.split(' ')[1]
    const data = parseJwt(token)
    if (Date.now() > data.exp * 1000) {
      window.location.href = "/login"
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// -- Helper functions

function bearerAuth(user) {
  return `Bearer ${user.accessToken}`
}