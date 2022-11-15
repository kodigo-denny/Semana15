import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Contador from './Components/Contador'
import ListaPokemon from './Components/ListaPokemon'
import Seleccion from './Components/Seleccion'


const App = () => {
  const[pokemon, setPokemon] = useState();
  const[valor, setValor] = useState();// el id del pokemon

  useEffect(() =>{
    console.log(pokemon)
  }, [pokemon])


 /* const seleccionar = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/"+valor;
    fetch(url).then(r => r.json())
    .then(j => {
      let nombre = j.name;
      let front = j.sprites.front_default;
      let back = j.sprites.back_default;
      let especie = j.species.name;
      let peso = j.weight;

      let pokemon = {nombre: nombre, front: front, back: back, especie: especie, peso: peso}
      setPokemon(pokemon)

    })
  }*/

  const seleccionar = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/"+valor;

    axios.get(url).then(r =>{
      let nombre = r.data.name;
      let front = r.data.sprites.front_default;
      let back = r.data.sprites.back_default;
      let especie = r.data.species.name;
      let peso = r.data.weight;

      let pokemon = {nombre: nombre, front: front, back: back, especie: especie, peso: peso}
      setPokemon(pokemon)

    })
  }



  const cambiar = (value) => {
    
    setValor(value)
  }

 

  return (
    <div>App
        <Seleccion cambio={cambiar} evento={seleccionar} />
        <ListaPokemon pokemon={pokemon}></ListaPokemon>
    </div>
  )
}

export default App