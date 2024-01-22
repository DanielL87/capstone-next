"use client";
import React, { useEffect, useState } from "react";

import { randomDataArray } from "../lib/randomStorePets.js";
import styles from "../page.module.css";
import PokemonDetails from "./PokemonDetails.jsx";

export default function StoreInventoryPets() {
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

  console.log(randomArray);



  return (
    <div>
      <h2>Inventory</h2>
      {inventoryArray && (
        <div className={styles.StoreInventoryPets}>
          {inventoryArray.map((pokemon) => (
            <div>
              <PokemonDetails pokemon={pokemon} />
              <button>Buy Pet</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
