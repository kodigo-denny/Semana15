import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import CampoTexto from './CampoTexto';

const StudentDelete = () => {
const {id} = useParams();

useEffect(() =>{
    if(localStorage.getItem("estudiantes")!=null){
        let lista = JSON.parse(localStorage.getItem("estudiantes"));

        lista.forEach(e => {
            if(e.id == id){
                document.querySelector("#txtId").value = e.id;
                document.querySelector("#txtNombre").value = e.nombre;
                document.querySelector("#txtApellido").value = e.apellido;
                document.querySelector("#txtCarrera").value = e.carrera;
            }
        });
    }
}, [])

const eliminarStudent = () => {
    if(localStorage.getItem("estudiantes")!=null){
        let lista = JSON.parse(localStorage.getItem("estudiantes"));
        
        let index = -1;
        let i = 0;
        lista.forEach(e => {
            if(e.id == id){
                index = i;
            }
            i++;
        });

        if(index!=-1){
            lista.splice(index,1);
        }

        let j = JSON.stringify(lista);
        
        localStorage.setItem("estudiantes", j);
        document.querySelector("#btnCancelar").click();
    }
}

  return (
    <div className='row'>
        <CampoTexto id="txtId" disabled>Id</CampoTexto>
        <CampoTexto id="txtNombre" disabled>Nombre</CampoTexto>
        <CampoTexto id="txtApellido" disabled>Apellido</CampoTexto>
        <CampoTexto id="txtCarrera" disabled>Carrera</CampoTexto>

        <div className='mt-3'>
            <button className='btn btn-danger col-6' onClick={() => eliminarStudent()}>Eliminar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-6' to="/">Cancelar</Link>
        </div>
    </div>
  )
}

export default StudentDelete