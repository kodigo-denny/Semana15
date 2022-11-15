import React from 'react'

const Boton = ({children,evento}) => {
  return (
    <button className='btn btn-secondary' onClick={evento}>{children}</button>
  )
}

export default Boton