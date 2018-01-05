export default {
  // save the token(userid) to localStorage
  setToken (token) {
    window.localStorage.setItem('token', token)
  },
  
  //get token(userid) from localStorage
  getToken () {
    return window.localStorage.getItem('token')
  }
}
