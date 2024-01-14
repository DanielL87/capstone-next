
'use client';
import React, { useEffect, useState } from 'react';
import styles from '../page.module.css';
import PokemonDetails from '../components/PokemonDetails.jsx';

export default function SelectPet() {
  const [starterArray, setStarterArray] = useState([]);

  async function fetchPokemon() {
    const starters = [];

    const starterId = [1, 4, 7, 25, 147];

    for (let i = 0; i < starterId.length; i++) {
      const request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${starterId[i]}`
      );
      const pokemonData = await request.json();

      const pokemonObject = {
        pokedexId: pokemonData.id,
        name: pokemonData.name,
        capitalizedName:
          pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
        type: pokemonData.types[0].type.name,
        spriteUrl: pokemonData.sprites.front_default,
      };

      starters.push(pokemonObject);
    }
    setStarterArray(starters);

  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(starterArray);


  return (
    <>
      <p>Select a Pet!</p>;
      <div className={styles.pokedexContainer}>
        {starterArray.map((pokemon) => (
          <PokemonDetails pokemon={pokemon} />
        ))}
      </div>
      <button>Confirm</button>
    </>
  );
