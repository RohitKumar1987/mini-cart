import axios from 'axios'
import AppConfig from './../AppConfig'
import ConstantString from './../AppConfig/AppConstantString'
//import { store } from '../store'
//import ActionTypes from '../store/actionTypes'

export const axiosWrapper = (requestObj, timeout = AppConfig.API_TIMEOUT) => {
  requestObj['timeout'] = timeout

  const cancelToken = axios.CancelToken.source()

  let timeoutId = setTimeout(() => {
    cancelToken.cancel(ConstantString.ERROR_API_TIMEOUT)
  }, requestObj.timeout)

  requestObj['cancelToken'] = cancelToken.token

  return axios(requestObj)
    .then((response) => {
      if (timeoutId != null) {
        clearTimeout(timeoutId)
      }
      return {
        code: 200,
        statusCode: response.status,
        response: response.data
      }
    })
    .catch((error) => {
      if (timeoutId != null) {
        clearTimeout(timeoutId)
      }
      if (axios.isCancel(error)) {
        return {
          code: '450',
          statusCode: '400',
          response: { error: [error.message] }
        }
      }
      if (error.response != null) {
        if (error.response && error.response.status === 400) {
          return {
            code: '400',
            statusCode: error.response.status,
            response: error.response.data
          }
        } else if (error.response && error.response.status === 401) {
          return {
            code: '401',
            statusCode: error.response.status,
            response: error.response.detail
          }
        } else if (error.response && error.response.status === 403) {
          return {
            code: '403',
            statusCode: error.response.status,
            response: error.response.data
          }
        } else if (error.response && error.response.status === 404) {
          return {
            code: '404',
            statusCode: error.response.status,
            response: error.response.data
          }
        } else if (
          error.response.status === 408 ||
          error.code === 'ECONNABORTED'
        ) {
          return {
            code: '450',
            statusCode: error.response.status,
            response: { error: [ConstantString.ERROR_API_TIMEOUT] }
          }
        }
      }
      return {
        code: '450',
        statusCode: '400',
        response: { error: [ConstantString.ERROR_API_SOMETHING_WENT_WRONG] }
      }
    })
}
