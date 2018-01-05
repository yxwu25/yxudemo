import ApiBase from './base'

class ApiUser extends ApiBase {
  createUser (data) {
    data.password = '1'
    return this.post('/users', data)
  }

  login (data) {
    return this.fetch({
      url: '/users',
      params: data
    })
  }

  loginWithFacebook (data) {
    return this.fetch({
      url: '/users',
      params: data
    })
  }

  fetchUserInfoById (id) {
    return this.fetch(`/users/${id}`)
  }
}

export default new ApiUser()
