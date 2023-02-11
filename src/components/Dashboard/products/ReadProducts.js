import React from 'react'
import { GETPRODUCTS } from '../../services/productsActions'

const ReadProducts = ({setFetchHelper}) => {
  return (
    <div>ReadProducts
      <button onClick={()=>setFetchHelper({url: 'products', type: GETPRODUCTS, headers:{}})}>new fetch</button>
    </div>
  )
}

export default ReadProducts