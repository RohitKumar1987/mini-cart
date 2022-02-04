import React from 'react'
import AppAssets from '../../../AppConfig/AppAssets'
import { productUpdateAction } from '../../../store/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import NumericInput from 'react-numeric-input'
import './style.css'

const ProductList = () => {
  const commonReducer = useSelector((state) => state.commonReducer)
  let products = commonReducer.products
  const dispatch = useDispatch()

  const setProductQuantity = (e, id) => {
    products.map(product => {
      if(product.id === id) {
        product.count = e
      }
      return product
    })
    localStorage.setItem('cartData', JSON.stringify(products))
    dispatch(productUpdateAction(products))
  }

  return (
    <div className="col-12">
      {products.map((product) => (
        <div className="cart-list" key={product.title}>
          <div className="row align-items-center">
            <div className="col-6">
              <div className="name_dec d-flex">
                <img src={AppAssets.planetIcon} alt=""/>
                <div className="name_detail">
                    <h6>{product.title}</h6>
                    <p>{product.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="item_increase">
                <NumericInput 
                    className="form-control" 
                    value={product.count} 
                    min={ 0 } 
                    max={ 100 } 
                    step={ 1 } 
                    precision={ 0 } 
                    size={ 5 } 
                    mobile
                    onChange={(e) => {setProductQuantity(e, product.id, product.count)}}
                  />
              </div>
            </div>
            <div className="col-3">
              <div className="cart_price">
                {product.currency+product.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
