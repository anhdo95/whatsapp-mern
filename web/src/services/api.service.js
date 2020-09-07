import axios from './axios'

export function getMessages() {
  return axios.get(`/messages`)
}

