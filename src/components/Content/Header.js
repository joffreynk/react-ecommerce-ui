  import React from 'react'
  import PropTypes from 'prop-types'
  import {BsSearch, BsSuitHeart, BsCart4} from 'react-icons/bs'

  const Header = props => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-10">
      <div className="text-3xl">Logo</div>
      <ul className='flex justify-center items-center gap-4'>
        <li className='hover:underline decoration-orange-500'>Home</li>
        <li className='hover:underline decoration-orange-500'>Collection</li>
        <li className='hover:underline decoration-orange-500'>Men</li>
        <li className='hover:underline decoration-orange-500'>Women</li>
        <li className='hover:underline decoration-orange-500'>Accessories</li>
        <li className='hover:underline decoration-orange-500'>Pages</li>
        <li className='hover:underline decoration-orange-500'>Contacts</li>
      </ul>
      <div className='flex justify-center items-center gap-3'>
        <BsSearch />
        <BsSuitHeart />
        <BsCart4 />
      </div>
    </div>
  )
  }

  Header.propTypes = {}

  export default Header