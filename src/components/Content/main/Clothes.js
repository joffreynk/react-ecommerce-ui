import React from 'react'
import Cloth from './Cloth'

const Clothes = () => {
  return (
    <div className='mx-24'>
      <div className='flex gap-4 mx-[5%] text-right'>
        <h3 className='text-3xl font-semibold uppercase text-black'>Men & women</h3>
        <ul className='flex gap-5 justify-center items-center pt-3'>
          <li>Best deals</li>
          <li>Featured</li>
          <li>Best seller</li>
          <li>New Arrivals</li>
          <li>Sale</li>
          <li>Accessories</li>
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