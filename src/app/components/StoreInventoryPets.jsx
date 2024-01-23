"use client";
import React, { useEffect, useState } from "react";

import { randomDataArray } from "../lib/randomStorePets.js";
import styles from "../page.module.css";
import PokemonDetails from "./PokemonDetails.jsx";

export default function StoreInventoryPets({
  isStore,
  setSection,
  user,
  setSelectedPokemon,
}) {
  const [randomArray, setRandomArray] = useState(randomDataArray);
  const [inventoryArray, setInventoryArray] = useState(null);
  const [purchaseMessage, setPurchaseMessage] = useState(null);

  async function fetchInventory() {
    const inventory = [];

    for (let i = 0; i < randomArray.length; i++) {
      const { number, boolean } = randomArray[i];

      const request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      const pokemonData = await request.json();

      // checks for legendary or mythical status
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

  function handleSelectPurchase(pokemon) {
    setSection("namePet");
    setSelectedPokemon(pokemon);
  }

  async function handlePurchase(cost) {
    try {
      const response = await fetch(`/api/wallet`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch wallet balance");
      }

      const walletData = await response.json();
      const walletBalance = walletData?.wallet?.coin;

      if (walletBalance < cost) {
        setPurchaseMessage(
          "Insufficient funds. Please add more coins to your wallet."
        );
        // return;
      }

      setPurchaseMessage("Purchase successful!");
    } catch (error) {
      console.error("Error handling purchase:", error.message);
      setPurchaseMessage("Failed to handle purchase. Please try again.");
    }
  }

  return (
    <div>
      {inventoryArray && (
        <div className={styles.StoreInventoryPets}>
          {inventoryArray.map((pokemon) => (
            <div key={pokemon.pokedexId}>
              <PokemonDetails pokemon={pokemon} />
              {isStore && (
                <div>
                  <button onClick={() => handlePurchase(pokemon.cost)}>
                    Buy Pet: Cost: {pokemon.cost}
                  </button>
                  {purchaseMessage && <p>{purchaseMessage}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
