import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { GETALL } from '../../services/actions'

const ReadProducts = ({setFetchHelper}) => {
  const products = [1, 2, 3, 4, 5, 4, 2, 7]

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

          {products.map((product, i)=>{
            return (<tr key={i}>
          <td>ID</td>
          <td>Category ID</td>
          <td>Name</td>
          <td>Price</td>
          <td>Description</td>
          <td>Product picture</td>
          <td><FaEdit /></td>
          <td><RiDeleteBin6Line /></td>
          </tr>)
          })}
          
        </tbody>
      </table>
      <button onClick={()=>setFetchHelper({url: 'productts', type: GETALL, dataUpdate:'products', headers:{}})}>new fetch</button>
    </div>
  )
}

export default ReadProducts