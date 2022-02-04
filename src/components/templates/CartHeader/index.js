import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppAssets from '../../../AppConfig/AppAssets'
import { productUpdateAction } from '../../../store/actions/productAction'
import './style.css'

const CartHeader = () => {
  const dispatch = useDispatch()
  const commonReducer = useSelector((state) => state.commonReducer)
  let prod = commonReducer.products
  let totalItemCount = 0
  let totalAmount = 0
  for(let i = 0; i < prod.length; i++) {
    console.log('abc', prod, prod[i].count, parseInt(prod[i].price))
    totalItemCount += prod[i].count
    totalAmount += prod[i].count * parseInt(prod[i].price)
  }

  const removeProductQuantity = (e, id) => {
    prod.map(product => {
      if(product.id === id) {
        product.count = 0
      }
      return product
    })
    localStorage.setItem('cartData', JSON.stringify(prod))
    dispatch(productUpdateAction(prod))
  }
  console.log('products', prod)
  return (
    <div className="col-12">
      <div className="cart-head text-right">
        <div className="d-flex cartrow">
          <div className="itemprice dropdown-toggle" id="cartview" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {prod.length ? prod[0].currency+totalAmount : '$0'}<span>{totalItemCount > 1 ? totalItemCount + ' items' : totalItemCount + ' item'}</span>
          </div>
          <img src={AppAssets.cartIcon} alt=""/>
          <div className="dropdown-menu cartview" aria-labelledby="cartview">
          {prod.map(product => (
            (product.count > 0 && 
            <div className="cartview_qty" key={product.title}>
              <div className="row align-items-center">
                <div className="col-8">
                  <div className="name_dec d-flex">
                    <a href="/" onClick={(e) => {removeProductQuantity(e, product.id)}} className="close"><img src={AppAssets.crossIcon} alt=""/></a>
                    <div className="name_detail">
                      <p>{product.title}</p>
                      <p>{product.currency+product.price}</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="cart_price">
                    Qty {product.count}
                  </div>
                </div>
              </div>
            </div>)
          ))}
          </div>
        </div>
      </div>
    </div>
);
}
export default CartHeader
