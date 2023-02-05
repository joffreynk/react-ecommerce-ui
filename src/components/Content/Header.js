  import React from 'react'
  import PropTypes from 'prop-types'
  import {BsSearch, BsSuitHeart, BsCart4} from 'react-icons/bs'

  const Header = props => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-10 bg-black text-white">
      <div className="text-3xl">Logo</div>
      <ul className='flex justify-center items-center gap-4'>
        <li>Home</li>
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
        <li>Pages</li>
        <li>Contacts</li>
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