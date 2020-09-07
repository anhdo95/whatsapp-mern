import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9000'
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  if (res) {
    return res.data
  }

  return res
})

export default instance