import React from 'react'
import PropTypes from 'prop-types'
import Collections from './main/Collections'
import CustomerCarer from './main/CustomerCarer'
import Products from './main/Products'



const Main = props => {


  return (
  <main className='mt-20'>
    {/* Carousel collections */}
    <Collections />

    {/* Customer carer */}
    <CustomerCarer />
    
    {/* Products component */}
    <Products />
  </main>
  )
}

Main.propTypes = {}

export default Main