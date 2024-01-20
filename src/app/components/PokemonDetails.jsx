"use client";
import React from "react";
import pokeColor from "../lib/pokeColor.js";
import styles from "../page.module.css";

export default function PokemonDetails({
  pokemon,
  setSelectedPokemon,
  isSelectPokemon,
  selectedPokemon,
}) {
  const isSelected =
    selectedPokemon && selectedPokemon.pokedexId === pokemon.pokedexId;

  const gradient = pokeColor[pokemon.type.toLowerCase()] || {
    start: "#ffffff",
    end: "#ffffff",
  };

  const gradientBackground = `linear-gradient(45deg, ${gradient.start}, ${gradient.end})`;

  const handleClick = () => {
    if (isSelectPokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  return (
    <>
    <div className={styles.pokemonMainContainer}>
      <div
        className={styles.pokemonContainer}
        style={{
          background: `url("/poke300.png"), ${gradientBackground}`,
        }}
        onClick={handleClick}
      >
        <div className={styles.pokemonCard} key={pokemon.pokedexId}>
          <p className={styles.pokeName}>
            {pokemon.capitalizedName || pokemon.name}
          </p>
          <div className={styles.pokeInfoContainer}>
            <p className={styles.pokeType}>Type: {pokemon.type}</p>

            <img
              className={`${styles.pokemon} ${
                isSelected ? styles.selectedPokemon : ""
              }`}
              src={pokemon.spriteUrl}
              alt={`${pokemon.name} sprite`}
            />
            {pokemon.isRare && <p className={styles.rarePokemon}>🌟 Rare</p>}
            {pokemon.isShiny && <p className={styles.shinyPokemon}>💫 Shiny</p>}
            {pokemon.nickname && <p className={styles.pokemonNickname}>{pokemon.nickname}</p>}
          </div>
          <p className={styles.stageId}>Pokedex #{pokemon.pokedexId}</p>{" "}
        </div>
      </div>
      </div>
    </>
  );
}
