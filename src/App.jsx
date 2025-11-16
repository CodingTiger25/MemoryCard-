import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

const [pokemon,setPokemon]=useState([]);
const [pokeImage,setPokeImage]=useState({});
const [points,setPoints]=useState(0);



useEffect(() => {
  getPokemonData(pokemonIds);
}, []);

const pokemonIds = [104, 197, 149,395, 251,780,249,851 ]

const getPokemonData = async (pokemonIdentity) => {
  const response = pokemonIdentity.map((id) =>  
         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) .then((response) =>response.json()))
  //const data = await response.json();
  const data = await Promise.all(response);
  console.log(data);
  const imageUrl = data.map((pic) => pic.sprites.other['official-artwork'].front_default);
  setPokemon(imageUrl);
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }}

const updatePoints = () => {
  setPoints(points + 1);
  shuffleArray(pokemon);
}

  return (

        <>     
          <h1 className='title'>Pokemon Memory Game</h1>
          <div className="card">
            <p className='instructions '>Click pokemon for a point but not same in a row</p>
          
            <h1 className='score'>SCORE</h1>
            <p className='points'>{points}</p>

            <div>

            
              {pokemon.map((pokemon, index) => (

                <img key={index} src={pokemon} onClick={updatePoints} className="picgrid" alt="Pokemon Logo" />
              ))}            
            </div>
          </div>
        </>
  )
}

export default App
