import React, {useReducer, createContext,useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'

import Root from './Content/index'
import CreateProduct from './Dashboard/createProduct'
import ReadProducts from './Dashboard/products/ReadProducts'
import Update from './Dashboard/products/update'
import productsReducer from './services/products/productsReducer'
import { GETPRODUCTS } from './services/products/productsActions'
import {userInitialState, adminInitialState} from './services/initialState'


const App = () => {
  const [fetchHelper, setFetchHelper] = useState({url: 'products', type: GETPRODUCTS, headers:{}})
  const initialState = userInitialState.token.isAdmin ? adminInitialState : userInitialState
  const [state, dispatch] = useReducer(productsReducer, initialState)
  
  useEffect(() => {
    const URL = 'http://localhost:3000/api/v1/'+fetchHelper.url;
    fetch(URL, fetchHelper.headers ? fetchHelper.headers : null)
    .then((response) => response.json())
    .then((data) => {
      dispatch({type: fetchHelper.type, payload: data})
    })
    .catch(error => console.log(error))
  }, [fetchHelper])

  console.log(state);
  return (

    <Routes className=' text-gray-600'>
      <Route path='/' element={<Root />} />
      <Route path='/dashboard' element={<CreateProduct  />} />
      <Route path='/dashboard/:id' element={<Update />} />
      <Route path='/dashboard/read' element={<ReadProducts setFetchHelper={setFetchHelper} />} />
    </Routes>
  )
}

export default App