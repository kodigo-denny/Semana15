import {React, useEffect} from 'react'
import BtnAdd from './BtnAdd'

const Tabla = () => {
    useEffect(() => {
        if(localStorage.getItem("estudiantes")!=null){
            let lista = JSON.parse(localStorage.getItem("estudiantes"));
            
            let titulos = lista[0];
            
            document.querySelector("#col1").innerHTML = titulos.id;
            document.querySelector("#col2").innerHTML = titulos.nombre;
            document.querySelector("#col3").innerHTML = titulos.apellido;
            document.querySelector("#col4").innerHTML = titulos.carrera;

            const filas = document.querySelector("#filas");
            let filasHtml = "";
            lista.forEach(e => {
                if(e.id != "Id"){
                    let btnEditar = `<a class='btn btn-secondary' href='/Edit/${e.id}'>Edit</a>`;
                    let btnEliminar = `<a class='btn btn-danger' href='/Delete/${e.id}'>Eliminar</a>`;
                    filasHtml += `<tr><td>${btnEditar} ${btnEliminar}</td><td>${e.id}</td><td>${e.nombre}</td><td>${e.apellido}</td><td>${e.carrera}</td></tr>`;
                }
            });
            filas.innerHTML = filasHtml;
        }
        //console.log(localStorage.getItem("estudiantes"))
    },[])

  return (
    <div>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th><BtnAdd /></th>
                    <th id="col1"></th>
                    <th id="col2"></th>
                    <th id="col3"></th>
                    <th id="col4"></th>
                </tr>
            </thead>
            <tbody id="filas">

            </tbody>
        </table>
    </div>
  )
}

export default Tabla