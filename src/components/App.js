import React, {useReducer, createContext,useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'

import Root from './Content/index'
import CreateProduct from './Dashboard/createProduct'
import ReadProducts from './Dashboard/products/ReadProducts'
import Update from './Dashboard/products/update'
import reducer from './services/reducer'
import { GETALL, DELETE } from './services/actions'
import {userInitialState, adminInitialState} from './services/initialState'

const App = () => {
  const [fetchHelper, setFetchHelper] = useState({url: 'products', dataUpdate:'products', type: GETALL, headers:{}})
  const initialState = userInitialState.token.isAdmin ? adminInitialState : userInitialState
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const URL = 'https://dummyjson.com/'+fetchHelper.url;
    fetch(URL, fetchHelper.headers ? fetchHelper.headers : null)
    .then((response) => response.json())
    .then((data) => {
      dispatch({type: fetchHelper.type, payload: data.products, dataUpdate: fetchHelper.dataUpdate})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: DELETE, payload: error, dataUpdate: fetchHelper.message})
    })
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