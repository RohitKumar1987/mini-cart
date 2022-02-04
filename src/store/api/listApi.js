import { axiosWrapper } from '../../shared/AxiosWrapper'


export function fetchData() {
  const requestObj = {
    method: 'get',
    url: 'https://dnc0cmt2n557n.cloudfront.net/products.json',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  return axiosWrapper(requestObj)
}