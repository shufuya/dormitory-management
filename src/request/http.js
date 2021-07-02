import axios from 'axios'

export function student (config) {
  const item = axios.create({
    baseURL: 'http://1.117.189.212:8082/dorP',
    timeout: 3000
  })
  return item(config)
}
