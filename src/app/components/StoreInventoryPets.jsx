"use client";
import React, { useEffect, useState } from "react";

import { RiCoinsFill } from "react-icons/ri";

import { randomDataArray } from "../lib/randomStorePets.js";
import styles from "../page.module.css";
import PokemonDetails from "./PokemonDetails.jsx";

export default function StoreInventoryPets({
  isStore,
  setSection,
  user,
  setSelectedPokemon,
  setError,
  selectedPokemon,
  setCost,
  wallet,
}) {
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

      let isRare = false;
      let rarityResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
      );
      let rarityData = await rarityResponse.json();

      if (rarityData.is_legendary || rarityData.is_mythical) {
        isRare = true;
      }

      let cost = 20;

      if (boolean) {
        cost += 10;
      }

      if (isRare) {
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

  function handleSelectPurchase(pokemon) {
    if (wallet.coin < pokemon.cost) {
      return setError("You dont have enough coins to make this purchase!");
    }

    setSection("namePet");
    setSelectedPokemon(pokemon);
    setCost(pokemon.cost);
    setError("");
  }

  return (
    <>
      
      <div className={styles.heroStoreContainer}>
        {inventoryArray && (
          <div className={styles.StoreInventoryPets}>
            {inventoryArray.map((pokemon) => (
              <div key={pokemon.pokedexId} className={styles.heroStoreButton}>
                <div className={styles.storeInventoryPetsContainer}>
                  
                  <PokemonDetails key={pokemon.pokedexId} pokemon={pokemon} isProfilePage={false}/>

                  {isStore && user.id && (
                    <button
                      className={styles.buyPetBtn}
                      onClick={() => handleSelectPurchase(pokemon)}
                    >
                      Buy Pet for <RiCoinsFill className={styles.coin} />
                      {pokemon.cost}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
