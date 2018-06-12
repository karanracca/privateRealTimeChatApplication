import constants from './constants.service';

export function login(state) {
  const credentials = {
    username: state.username,
    password: state.password
  }
  
  return fetch(`${constants.BASE_URL}/login`, {
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
  }).then(async response => {
    let result = await response.json();
    console.log('Response', result);
    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.payload));
      return result;
    } else {
      throw new Error(result.message);
    }
  }).catch(err => {
    console.log(err);
    throw err;
  })
}

export function register(data) {
  const user = {
    fullname: data.fullname,
    nickname: data.nickname,
    email: data.email,
    password: data.password,
    avatar: data.avatar
  }
  
  return fetch(`${constants.BASE_URL}/register`, {
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
  }).then(async response => {
    let result = await response.json();
    console.log('Response', result);
    if (result.success) {
      return result;
    } else {
      throw new Error(result.message);
    }
  }).catch(err => {
    console.log(err);
    throw err;
  })
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