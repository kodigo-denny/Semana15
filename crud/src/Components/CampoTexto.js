import React from 'react'

const CampoTexto = ({children, id, disabled}) => {
  return (
    <div className='form-group mt-3'>
        <label className='form-label'><b>{children}</b></label>
        <input type={"text"} className="form-control" id={id} disabled={disabled} />
    </div>
  )
}

export default CampoTexto