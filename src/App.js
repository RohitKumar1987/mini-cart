import React, {useEffect} from 'react'
import Routes from './Routes'
import { BrowserRouter as Router} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productUpdateAction } from './store/actions/productAction'
import { fetchData } from './store/api/listApi'
import ConstantApiStatus from './AppConfig/ApiStatusCodes'
import './assets/stylesheets/cart.css'

function App () {
  const dispatch = useDispatch()

  const loadData = async() => {
    try {
      const responseData = await fetchData()
      if (responseData.statusCode === ConstantApiStatus.SUCCESS_200) {
        let data = responseData.response.products
        data = data.map(product => {
          product.count = 1
          return product
        })
        console.log('data', data)
        localStorage.setItem('cartData', JSON.stringify(data))
        dispatch(productUpdateAction(data))
      } 
    } catch (error) {
    }
  }

  useEffect(() => {
    let cartData = localStorage.getItem('cartData')
    let callApi = true
    if(cartData) {
      callApi = false
      cartData = JSON.parse(cartData)
    }
    if (callApi) {
      loadData()
    } else {
      dispatch(productUpdateAction(cartData))
    }
  })

  return (
    <Router>
      <div className="page-wrapper">
        <Routes />
      </div>
    </Router>
  )
}

export default App
