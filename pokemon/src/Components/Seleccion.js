import React from 'react'

const Seleccion = ({evento, cambio}) => {
  return (
    <div className='row'>
      <div className='form-group col-6'>
        <input type={"text"} onBlur={(e) => cambio(e.target.value)} className="form-control" />
        <button className='btn btn-primary' onClick={() => evento()}>Seleccionar</button>
      </div>
        
    </div>
  )
}

export default Seleccion