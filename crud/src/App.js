import {React, useEffect} from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import StudentAdd from './Components/StudentAdd'
import Tabla from './Components/Tabla'

const App = () => {

    useEffect(() =>{
//        localStorage.clear()
        if(localStorage.getItem("estudiantes")==null){
            let titulos = {id:"Id", nombre:"Nombre", apellido:"Apellido", carrera:"Carrera"};  

            let lista = [];
            lista.push(titulos);
            let j = JSON.stringify(lista)

            localStorage.setItem("estudiantes", j);
        }      
    },[])

  return (
    <div className='container'>
        <BrowserRouter>

            <div className='form-group'>
                <Link className='btn btn-dark' to="/">Inicio</Link>
                <Link className='btn btn-dark' to="/Add">Add</Link>
                <Link className='btn btn-dark' to="/Edit">Edit</Link>
                <Link className='btn btn-dark' to="/Delete">Delete</Link>
            </div>

            <Switch>
                <Route path='/' exact><Tabla /></Route>
                <Route path='/Add'><StudentAdd /></Route>
                <Route path='/Edit'><h2>Edit</h2></Route>
                <Route path='/Delete'><h2>Delete</h2></Route>
            </Switch>
            
        </BrowserRouter>
    </div>
  )
}

export default App