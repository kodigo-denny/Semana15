import React from 'react'
import {Link} from 'react-router-dom'
import CampoTexto from './CampoTexto'

const StudentAdd = () => {

const guardarStudent = () => {
    let id = document.querySelector("#txtId").value;
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let carrera = document.querySelector("#txtCarrera").value;

    if(esValido(id, nombre, apellido, carrera)){
        if(localStorage.getItem("estudiantes")!=null){
            let lista = JSON.parse(localStorage.getItem("estudiantes"));

            if(existe(lista, id))
                alert("El id ingresado ya existe");
            else{
                // Guardar
                let student = {id:id, nombre:nombre, apellido:apellido, carrera:carrera};
                lista.push(student);

                let j = JSON.stringify(lista)

                localStorage.setItem("estudiantes", j)
                
                document.querySelector("#btnCancelar").click();
            }
        }
    }
    else{
        alert("Complete todos los campos");
    }
}

const existe = (lista, id) => {
    let encontrado = false;
    lista.forEach(e => {
        if(e.id==id)
            encontrado = true;
    });
    return encontrado;
}

const esValido = (id, nombre, apellido, carrera) =>{
    return id=="" || nombre=="" || apellido=="" || carrera=="" ? false : true;
}

  return (
    <div className='row'>
        <CampoTexto id="txtId">Id</CampoTexto>
        <CampoTexto id="txtNombre">Nombre</CampoTexto>
        <CampoTexto id="txtApellido">Apellido</CampoTexto>
        <CampoTexto id="txtCarrera">Carrera</CampoTexto>

        <div className='mt-3'>
            <button className='btn btn-primary col-6' onClick={() => guardarStudent()}>Guardar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-6' to="/">Cancelar</Link>
        </div>
    </div>
  )
}

export default StudentAdd