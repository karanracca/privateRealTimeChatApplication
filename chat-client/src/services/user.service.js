import constants from './constants.service';
import axios from 'axios';

export function login(state) {
  const credentials = {
    username: state.username,
    password: state.password
  }

  return axios.post(`${constants.BASE_URL}/login`, credentials).then(response => {
    //console.log('Response', response.data.payload);
    localStorage.setItem('user', JSON.stringify(response.data.payload));
    return response.data.payload;
  }).catch(err => {
    console.log(err.response.data.message);
    throw err;
  })
}

export function register(user) {

  return axios.post(`${constants.BASE_URL}/register`, user).then(response => {
    console.log('Response', response.data.payload);
    return response.data.payload;
  }).catch(err => {
    console.log(err.response.data.message);
    throw err.response;
  })


  // return fetch(`${constants.BASE_URL}/register`, {
  //   body: JSON.stringify(user),
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   method: 'POST',
  //   mode: 'cors',
  // }).then(async response => {
  //   let result = await response.json();
  //   console.log('Response', result);
  //   if (result.success) {
  //     return result;
  //   } else {
  //     throw new Error(result.message);
  //   }
  // }).catch(err => {
  //   console.log(err);
  //   throw err;
  // })
}

export function getUsers() {
  return fetch(`${constants.BASE_URL}/get_users`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json());
}