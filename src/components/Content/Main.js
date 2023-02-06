import React from 'react'
import PropTypes from 'prop-types'
import Collections from './main/Collections'



const Main = props => {


  return (
  <main className='mt-20'>
    {/* Carousel collections */}
    <Collections />
  </main>
  )
}

Main.propTypes = {}

export default Main