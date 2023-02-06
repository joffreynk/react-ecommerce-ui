import React from 'react'
import PropTypes from 'prop-types'
import {FcShipped } from 'react-icons/fc'
import {AiOutlineLike } from 'react-icons/ai'
import {IoArrowUndoOutline } from 'react-icons/io5'

const CustomerCarer = props => {
  const cares = [
    {icon: FcShipped, title: 'free shipping', message: 'on all products over $5000'},
    {icon: AiOutlineLike, title: '100% satisfaction', message: 'We provide guinine produtcs'},
    {icon: IoArrowUndoOutline, title: 'easy return', message: 'We provide easy return policy'},
  ]
  const care = cares.map(care=>{
    return <div className='border px-7 py-4 flex justify-center items-center gap-5 rounded-lg'>
      <care.icon className='text-6xl h-10 '/>
      <div>
        <h4 className='uppercase text-xl font-semibold'>{care.title}</h4>
        <p className='text-gray-400'>{care.message}</p>
      </div>
    </div>
  })

  return (
    <section className='flex gap-5 justify-evenly mx-auto pt-10'>
      {care}
    </section>
  )
}

CustomerCarer.propTypes = {}

export default CustomerCarer