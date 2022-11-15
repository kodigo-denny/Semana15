import React from 'react'
import Pokemon from './Pokemon'

const ListaPokemon = ({pokemon}) => {
  return (
    <div className='row'>
        {pokemon==undefined?'':<Pokemon especie={pokemon.especie} peso={pokemon.peso} front={pokemon.front} back={pokemon.back}>{pokemon.nombre}</Pokemon>}
    </div>
  )
}

export default ListaPokemon