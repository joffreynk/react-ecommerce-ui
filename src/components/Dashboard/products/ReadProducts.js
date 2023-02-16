import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { GETALL } from '../../services/actions'

const ReadProducts = ({setFetchHelper}) => {
  const products = [1, 2, 3, 4, 5, 4, 2, 7]

  return (
    <div>
      <table class="table-fixed border-collapse border border-slate-400 w-[96%] mx-[2%] overflow-y-hidden">
        <thead className='w-full'>
          <tr className='capitalize border border-slate-300 flex justify-between items-center  '>
            <th className='border border-slate-300 '>ID</th>
            <th className='border border-slate-300 '>Category ID</th>
            <th className='border border-slate-300 '>Name</th>
            <th className='border border-slate-300 '>Price</th>
            <th className='border border-slate-300 '>Description</th>
            <th className='border border-slate-300 '>Product picture</th>
            <th className='border border-slate-300 '>Edit</th>
            <th className='border border-slate-300 '>Delete</th>
          </tr>
        </thead>
        <tbody className='w-full '>
          {products.map((product, i)=>{
            return (<tr key={i} className="w-full flex justify-between items-center">
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