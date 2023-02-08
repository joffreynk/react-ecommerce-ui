import React from 'react'
import {BsStar, BsCart4, BsSuitHeart} from 'react-icons/bs'
import {MdOutlineCropRotate} from 'react-icons/md'

const Product = ({product}) => {
  const numberRating = [1, 2, 3, 4, 5]
  return (

    <div className='group-[mygroup]:hidden'>
      <img src={product.pic} alt = '' className=''/>
      <p>{product.description}</p>
      <p className='flex'>
        {numberRating.map(number=><BsStar />)}
      </p>
      <div className='flex gap-10'>
        <p>${product.price}</p>
        <del>${product.price+Number(10*Math.random().toFixed(3))}</del>
      </div>
      <div className='hidden group-[mygroup]:hover:flex '>
        <BsCart4 />
        <BsSuitHeart />
        <MdOutlineCropRotate />
      </div>

    </div>
  )
}

export default Product