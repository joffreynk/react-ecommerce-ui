import React from 'react'
import PropTypes from 'prop-types'
import Collections from './Collections'



const Main = props => {


  return (
  <main className='mt-20'>
    {/* move carousel collections in its own component */}
    <Collections />
  </main>
  )
}

Main.propTypes = {}

export default Main