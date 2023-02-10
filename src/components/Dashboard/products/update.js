import React from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
  return (
    <div>update {id}</div>
  )
}

export default Update