import React from 'react'
import Product from './Product'

import {products} from '../../services/index'

const Products = () => {
  return (
    <div className='mx-10'>
      <div className='flex gap-4 mx-[5%] justify-end'>
        <h3 className='text-3xl font-semibold uppercase text-black'>Men & women</h3>
        <ul className='flex gap-5 justify-center items-center pt-3 group-hover:cursor-pointer'>
          <li className='hover:cursor-pointer'>Best deals</li>
          <li className='hover:cursor-pointer'>Featured</li>
          <li className='hover:cursor-pointer'>Best seller</li>
          <li className='hover:cursor-pointer'>New Arrivals</li>
          <li className='hover:cursor-pointer'>Sale</li>
          <li className='hover:cursor-pointer'>Accessories</li>
        </ul>
      </div>
      {products.map((product) =><Product key={product.id} product={product}/>)}
      <Product />
    </div>
  )
}

export default Products