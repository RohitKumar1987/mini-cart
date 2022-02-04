import ActionTypes from '../actionTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  products: [],
}
const commonReducer = (state = initialState, action) => {
  let payload = {}
  try {
    payload = action.payload
  } catch (error) {
    payload = {}
  }

  switch (action.type) {
  case ActionTypes.PRODUCT_UPDATE:
    return {
      ...state,
      products: payload.data
    }


  default:
    return state
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}
export default persistReducer(persistConfig, commonReducer)
