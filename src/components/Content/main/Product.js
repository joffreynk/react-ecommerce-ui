import React from 'react'
import {BsStar} from 'react-icons/bs'

const Product = ({product}) => {
  const numberRating = [1, 2, 3, 4, 5]
  return (

    <div>
      <img src={product.pic} alt = '' className=''/>
      <p>{product.description}</p>
      <p className='flex'>
        {numberRating.map(number=><BsStar />)}
      </p>
      <p>{product.price}</p>
      </div>
  )
}

export default Product