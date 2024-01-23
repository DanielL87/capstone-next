'use client';
import React, { useEffect, useState } from 'react';

import { randomDataArray } from '../lib/randomStorePets.js';
import styles from '../page.module.css';
import PokemonDetails from './PokemonDetails.jsx';

export default function StoreInventoryPets({ isStore }) {
  const [randomArray, setRandomArray] = useState(randomDataArray);
  const [inventoryArray, setInventoryArray] = useState(null);

  async function fetchInventory() {
    const inventory = [];

    for (let i = 0; i < randomArray.length; i++) {
      const { number, boolean } = randomArray[i];

      const request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      const pokemonData = await request.json();

      //checks for legendary or mythical status
      let isRare = false;
      let rarityResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
      );
      let rarityData = await rarityResponse.json();

      if (rarityData.is_legendary || rarityData.is_mythical) {
        isRare = true;
      }

      let cost = 20; // Standard cost

      if (boolean) {
        // Shiny + 10
        cost += 10;
      }

      if (isRare) {
        // Rare x 2
        cost *= 2;
      }

      const pokemonObject = {
        pokedexId: pokemonData.id,
        name: pokemonData.name,
        capitalizedName:
          pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
        type: pokemonData.types[0].type.name,
        spriteUrl: boolean
          ? pokemonData.sprites.front_shiny
          : pokemonData.sprites.front_default,
        isShiny: boolean,
        isRare,
        cost,
      };

      inventory.push(pokemonObject);
    }

    setInventoryArray(inventory);
  }

  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    console.log(inventoryArray);
  }, [inventoryArray]);

  return (
    <>
      <p className={styles.heroStoreTitle}>Featured Pets of the Day!</p>
      <div className={styles.heroStoreContainer}>
        {inventoryArray && (
          <div className={styles.StoreInventoryPets}>
            {inventoryArray.map((pokemon) => (
              <div className={styles.heroStoreButton}>
                <PokemonDetails key={pokemon.pokedexId} pokemon={pokemon} />
                {isStore && <button>Buy Pet: Cost : {pokemon.cost}</button>}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
