import {React, useState, useEffect } from 'react'

const Contador = () => {
    const [cantidad,setCantidad] = useState(0)
    const [estado, setEstado] = useState(0)

    useEffect(() => {
        console.log("Contador cambio a: "+cantidad)
        if(cantidad!=0){
            const boton = document.querySelector("#boton");
            boton.className = "btn btn-primary"
        }
        
    },[cantidad])

    useEffect(() => {
        console.log("Estado cambio: " + estado)
    }, [estado])

    useEffect(() => {
        console.log("Se ejecuta solo la primer vez")
    },[])

  return (
    <div>Contador: {cantidad}
        <button id={"boton"} onClick={() => {setCantidad(cantidad+1)}}>Aumentar</button>
        <button onClick={() => {setCantidad(cantidad-1)}}>Disminuir</button>

        <button onClick={() => {setEstado(estado+1)}}>Estado</button>
    </div>
  )
}

export default Contador