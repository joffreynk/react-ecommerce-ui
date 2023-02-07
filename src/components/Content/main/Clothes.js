import React from 'react'
import Cloth from './Cloth'

const Clothes = () => {
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
      <Cloth />
      <Cloth />
      <Cloth />
      <Cloth />
      <Cloth />
      <Cloth />
    </div>
  )
}

export default Clothes