import {React, useEffect} from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import StudentAdd from './Components/StudentAdd'
import StudentDelete from './Components/StudentDelete'
import StudentEdit from './Components/StudentEdit'
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

            <Switch>
                <Route path='/' exact><Tabla /></Route>
                <Route path='/Add'><StudentAdd /></Route>
                <Route path='/Edit/:id' children={<StudentEdit />}></Route>
                <Route path='/Delete/:id' children={<StudentDelete />}></Route>
            </Switch>
            
        </BrowserRouter>
    </div>
  )
}

export default App