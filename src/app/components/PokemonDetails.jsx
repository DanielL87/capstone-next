import React from "react";
import pokeColor from "../lib/pokeColor.js";

import styles from "../page.module.css";

export default function PokemonDetails({ pokemon }) {
  const gradient = pokeColor[pokemon.type.toLowerCase()] || {
    start: "#ffffff",
    end: "#ffffff",
  };

  const gradientBackground = `linear-gradient(45deg, ${gradient.start}, ${gradient.end})`;

  return (
    <>
      <div
        className={styles.pokemonContainer}
        style={{ 
          background: `url("/poke300.png"), ${gradientBackground}` 
        }}
      >
        <div
          className={styles.pokemonCard}
          key={pokemon.pokedexId}
        >
          <p className={styles.pokeName}> {pokemon.capitalizedName} </p> 
          <div className={styles.pokeInfoContainer}>
          <p className={styles.pokeType} >Type: {pokemon.type}</p>
          
          <img className={styles.pokemon} src={pokemon.spriteUrl} alt={`${pokemon.name} sprite`} />
          <p className={styles.species}>Species: {pokemon.species}</p>
          </div>
          <p className={styles.stageId}>STAGE #{pokemon.pokedexId}</p>{" "}
        </div>
      </div>
    </>
  );
}
