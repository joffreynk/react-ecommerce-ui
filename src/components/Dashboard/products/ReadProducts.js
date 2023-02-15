import React from 'react'
import { GETALL } from '../../services/actions'

const ReadProducts = ({setFetchHelper}) => {
  return (
    <div>
      <table class="table-fixed">
        <thead>
          <tr className='capitalize'>
            <th>ID</th>
            <th>Category ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Product picture</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
      <button onClick={()=>setFetchHelper({url: 'productts', type: GETALL, dataUpdate:'products', headers:{}})}>new fetch</button>
    </div>
  )
}

export default ReadProducts