  import React from 'react'
  import PropTypes from 'prop-types'
  import {BsSearch, BsSuitHeart, BsCart4} from 'react-icons/bs'

  const Header = props => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex ">
      <div className="text-8xl">Logo</div>
      <ul>
        <li>Home</li>
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
        <li>Pages</li>
        <li>Contacts</li>
      </ul>
      <div>
        <BsSearch />
        <BsSuitHeart />
        <BsCart4 />
      </div>
    </header>
  )
  }

  Header.propTypes = {}

  export default Header