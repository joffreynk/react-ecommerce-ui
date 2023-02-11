import React, {useState}  from 'react'
import PropTypes from 'prop-types'
import {collections} from '../../services/index'

const Collections = props => {
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
    <section id="collections" className="relative">
      <img className="w-full h-64" src={collections[position].pic} alt="Collections"/>
      <div className='absolute top-[40%] right-0 left-0 flex justify-between items-end text-black text-xlg px-5'>
        <button className="-rotate-90 uppercase  text-3xl hover:scale-[80%]" onClick={Prev} >Prev</button>
        <div className='flex flex-col gap-4'>
          <h4 className='text-4xl uppercase text-pink-600 font-extrabold'>{collections[position].title}</h4>
          <p className='text-lg'>{collections[position].message}</p>
        </div>
        <button className="-rotate-90 uppercase text-3xl hover:scale-[80%]" onClick={next} >Next</button>
      </div>
    </section>
  )
}

Collections.propTypes = {}

export default Collections