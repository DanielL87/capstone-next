import React from "react";

import styles from "../page.module.css";

export default function PokemonDetails({ pokemon }) {
  return (
    <div className={styles.pokemonContainer}>
      <div key={pokemon.pokedexId}>
        <p> {pokemon.capitalizedName} </p> <p>ID:{pokemon.pokedexId}</p>{" "}
        <p>Type: {pokemon.type}</p>
        <p>Species: {pokemon.species}</p>
        <img src={pokemon.spriteUrl} alt={`${pokemon.name} sprite`} />
      </div>
    </div>
  );
}
