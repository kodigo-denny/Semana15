import { type } from '@testing-library/user-event/dist/type';
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import CampoTexto from './CampoTexto';

const StudentEdit = () => {
    const [mensaje, setMensaje] = useState("");
    let {id} = useParams();
    
useEffect(() => {
    if(localStorage.getItem("estudiantes")!=null){
        let lista = JSON.parse(localStorage.getItem("estudiantes"));

        lista.forEach(e => {
            if(e.id==id){
                document.querySelector("#txtId").value = e.id;
                document.querySelector("#txtNombre").value = e.nombre;
                document.querySelector("#txtApellido").value = e.apellido;
                document.querySelector("#txtCarrera").value = e.carrera;
            }
        });
    }
}, [])

const editarStudent = () => {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let carrera = document.querySelector("#txtCarrera").value;

    if(esValido(id, nombre, apellido, carrera)){
        if(localStorage.getItem("estudiantes")!=null){
            let lista = JSON.parse(localStorage.getItem("estudiantes"));

            lista.forEach(e => {
                if(e.id == id){
                    e.nombre = nombre;
                    e.apellido = apellido;
                    e.carrera = carrera;
                }
            });

            
            let j = JSON.stringify(lista);

            localStorage.setItem("estudiantes", j);
            
            document.querySelector("#btnCancelar").click();
        }
    }
    else{
        setMensaje("Complete todos los campos");
    }
}

const esValido = (id, nombre, apellido, carrera) =>{
    return id=="" || nombre=="" || apellido=="" || carrera=="" ? false : true;
}

  return (
    <div className='row'>
        <div className={mensaje!=""?'alert alert-warning':''}>{mensaje}</div>
        <CampoTexto id="txtId" disabled>Id</CampoTexto>
        <CampoTexto id="txtNombre">Nombre</CampoTexto>
        <CampoTexto id="txtApellido">Apellido</CampoTexto>
        <CampoTexto id="txtCarrera">Carrera</CampoTexto>

        <div className='mt-3'>
            <button className='btn btn-primary col-6' onClick={() => editarStudent()}>Editar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-6' to="/">Cancelar</Link>
        </div>
    </div>
  )
}

export default StudentEdit