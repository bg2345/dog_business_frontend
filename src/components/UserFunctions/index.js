import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/api/register', { headers: {
      'Content-Type': 'application/json',
      'first_name': newUser.first_name,
      'last_name': newUser.last_name,
      'email': newUser.email,
      'password': newUser.password
    }})
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/api/login', { headers: {
      'Content-Type': 'application/json',
      'email': user.email,
      'password': user.password
    }})
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('http://localhost:5000/api/retrieve', {
      // headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
