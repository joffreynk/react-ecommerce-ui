import React from 'react'
import PropTypes from 'prop-types'
import Collections from './main/Collections'
import CustomerCarer from './main/CustomerCarer'
import Clothes from './main/Clothes'



const Main = props => {


  return (
  <main className='mt-20'>
    {/* Carousel collections */}
    <Collections />

    {/* Customer carer */}
    <CustomerCarer />
    
    {/* clothes component */}
    <Clothes />
  </main>
  )
}

Main.propTypes = {}

export default Main