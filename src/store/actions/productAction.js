import ActionTypes from '../actionTypes'

export const productUpdateAction = (products) => {
  return {
    type: ActionTypes.PRODUCT_UPDATE,
    payload: {
      data: products
    }
  }
}

