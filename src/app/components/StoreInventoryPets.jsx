"use client";
import { useEffect, useState } from "react";
import { randomDataArray } from "../lib/randomStorePets.js";

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
  useEffect(() => {}, [inventoryArray]);

  return <div>Inventory</div>;
}
