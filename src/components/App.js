import React, {useReducer, createContext, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'

import Root from './Content/index'
import CreateProduct from './Dashboard/createProduct'
import ReadProducts from './Dashboard/products/ReadProducts'
import Update from './Dashboard/products/update'
import productsReducer from './services/productsReducer'
import { GETPRODUCTS } from './services/productsActions'

const initialState = {
  products: [],
  orders: [],
  reviews: [],
  token: {}
}

const adminInitialState = {
  ...initialState,
  users: []
}

const URL = 'http://localhost:3000/api/v1/products';

const App = () => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
  
  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch({type: GETPRODUCTS, payload: data})
    })
    .catch(error => console.log(error))
  }, [])
  
  console.log(state);
  return (

    <Routes className=' text-gray-600'>
      <Route path='/' element={<Root />} />
      <Route path='/dashboard' element={<CreateProduct />} />
      <Route path='/dashboard/:id' element={<Update />} />
      <Route path='/dashboard/read' element={<ReadProducts />} />
    </Routes>
  )
}

export default App