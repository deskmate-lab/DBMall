import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  )

  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    err => {
      return err;
    }
  )

  return instance(config);
}
