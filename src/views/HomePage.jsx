import React from 'react'
import CartHeader from '../components/templates/CartHeader'
import ProductList from '../components/templates/ProductList'

const HomePage = (props) => {

  return (
    <>
      <div className="cart-wrapper">
        <div className="container-fluid">
          <div className="row">
            <CartHeader />
            <ProductList />
          </div>
        </div>
      </div>   
    </>
  )
}
export default HomePage
