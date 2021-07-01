import axios from 'axios'

export function student(config) {
  const item = axios.create({
    baseURL: 'http://indexx.natapp1.cc/dor',
    timeout: 3000
  })
  return item(config)
}
