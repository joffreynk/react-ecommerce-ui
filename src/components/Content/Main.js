import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {collections} from '../services/index'

const Main = props => {
  const [position, setPosition] = useState(0)
  const next = () => {
    if (position === collections.length-1) {
      setPosition(0)
    }else {
      setPosition(position+1);
    }
  }

  const Prev = () => {
    if (position === 0) {
      setPosition(collections.length-1)
    }else {
      setPosition(position-1);
    }
  }

  return (
  <main className='mt-20'>
    <section id="collections" className="relative">
      <img className="w-full h-64" src={collections[position].pic} alt="Collections"/>
      <div className='absolute top-[50%] right-0 left-0 flex justify-between items-end text-black text-xlg px-5'>
        <button className=" -rotate-90 uppercase  text-3xl" onClick={Prev} >Prev</button>
        <p>{collections[position].message}</p>
        <button className="-rotate-90 uppercase text-3xl" onClick={next} >Next</button>
      </div>
    </section>
  </main>
  )
}

Main.propTypes = {}

export default Main