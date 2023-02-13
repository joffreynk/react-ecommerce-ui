import React from 'react'
import { GETALL } from '../../services/actions'

const ReadProducts = ({setFetchHelper}) => {
  return (
    <div>ReadProducts
      <button onClick={()=>setFetchHelper({url: 'productts', type: GETALL, dataUpdate:'products', headers:{}})}>new fetch</button>
    </div>
  )
}

export default ReadProducts