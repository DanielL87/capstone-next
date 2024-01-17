"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import PokemonDetails from "../components/PokemonDetails.jsx";

export default function SelectPet() {
  const [starterArray, setStarterArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [section, setSection] = useState("selectPet");

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

  function handleConfirmPet() {
    setSection("namePet");
  }

  function handleSubmitName() {
    setSection("congrats");
  }

  return (
    <>
      {/* Select a pet section */}
      {section === "selectPet" && (
        <>
          <p className={styles.selectPetTitle}>Select a Pet!</p>

          <div className={styles.pokedexContainer}>
            {starterArray.map((pokemon) => (
              <PokemonDetails key={pokemon.pokedexId} pokemon={pokemon} />
            ))}
          </div>
          <button className={styles.confirmPetBtn} onClick={handleConfirmPet}>
            Confirm
          </button>
        </>
      )}

      {/* Name your pet section */}
      {section === "namePet" && (
        <>
          <div>
            <p className={styles.selectPetTitle}>Name your Pet!</p>
          </div>

          <div className={styles.namePetContainer}>
            <input
              className={styles.namePetInput}
              type="text"
              placeholder="Enter a pet name.."
            />{" "}
            <button
              className={styles.petNameSubmitBtn}
              onClick={handleSubmitName}
            >
              Submit
            </button>
          </div>
        </>
      )}

      {/* Congrats section */}
      {section === "congrats" && (
        <div className={styles.congratsContainer}>
          <p className={styles.selectPetTitle}>Congratulations!</p>
          <div className={styles.pokedexContainer}>
            {starterArray.map((pokemon) => (
              <PokemonDetails pokemon={pokemon} />
            ))}
          </div>
          <p className={styles.paraText}>
            You've successfully chosen your pet. This is a big step in your
            journey. Your pet is eager to grow and evolve, and it's all up to
            you now.
          </p>{" "}
          <br />
          <p className={styles.paraText}>
            Remember, every task you complete will help your pet. The more tasks
            you do, the faster your pet will evolve. It's not just about helping
            your pet grow, it's about growing yourself too.
          </p>{" "}
          <br />
          <p className={styles.paraText}>
            So, let's get started! Your pet is excited to see what you can
            achieve together.
          </p>
          <br />
          <p className={styles.paraText}>
            Click on your pet for more details or go to your tasks to get
            started!
          </p>
          <br />
          <div className={styles.congratsPetBtnContainer}>
            <button className={styles.confirmPetBtn}>Go to Tasks</button>
            <button className={styles.confirmPetBtn}>Profile</button>
          </div>
        </div>
      )}
    </>
  );
}
