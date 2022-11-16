import React from 'react'
import {Link} from 'react-router-dom'

const BtnAdd = () => {
  return (
    <div>
        <Link className='btn btn-primary' to="/Add">Add</Link>
    </div>
  )
}

export default BtnAdd