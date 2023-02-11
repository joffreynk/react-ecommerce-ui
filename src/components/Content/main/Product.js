import React from 'react'
import {BsStar, BsCart4, BsSuitHeart} from 'react-icons/bs'
import {MdOutlineCropRotate} from 'react-icons/md'

const Product = ({product}) => {
  const numberRating = [1, 2, 3, 4, 5]
  return (

    <div className='hover:border-2 hover:scale-110 rounded-md'>
      <img src={product.pic} alt = '' className='w-full h-[70%]  md:h-[82%]'/>
      <p>{product.description}</p>
      <p className='flex'>
        {numberRating.map(number=><BsStar key={number} className='cursor-pointer' />)}
      </p>
      <div className='flex gap-10'>
        <p>${product.price}</p>
        <del>${(product.price+Number(10*Math.random())).toString().slice(0, 4)}</del>
      </div>
      <div className='flex  gap-4'>
        <BsCart4 className='cursor-pointer' />
        <BsSuitHeart className='cursor-pointer' />
        <MdOutlineCropRotate className='cursor-pointer' />
      </div>

    </div>
  )
}

export default Product