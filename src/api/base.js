import axios from 'axios'

// send token with http request header
const accessToken = 'demo_token'

// api prefix
export const baseURL = process.env.NODE_ENV === 'production' ? 'http://39.106.49.124:8020/' : 'http://0.0.0.0:3000/'

var server = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    'Authorization': accessToken
  }
})

server.interceptors.request.use(function (config) {
  if (!config.headers.Authorization) {
    config.headers.Authorization = accessToken
  }
  return config
})

server.interceptors.response.use(function (response) {
  return response.data
})

export default class ApiBase {
  constructor () {
    this.server = server
  }
  fetch (options) {
    return this.server(options)
  }
  patch (url, data, config) {
    return this.server.patch(url, data, config)
  }
  put (url, data, config) {
    return this.server.put(url, data, config)
  }
  post (url, data, config) {
    return this.server.post(url, data, config)
  }
  delete (url, config) {
    return this.server.delete(url, config)
  }
}
