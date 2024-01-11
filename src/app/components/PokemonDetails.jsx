import React from "react";

import styles from "../page.module.css";

export default function PokemonDetails({ pokemon }) {
  return (
    <div className={styles.pokemonContainer}>
      <div key={pokemon.id}>
        <p> {pokemon.capitalizedName} </p> <p>ID:{pokemon.id}</p>{" "}
        <p>Type: {pokemon.type}</p>
        <p>Species: {pokemon.species}</p>
        <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
      </div>
    </div>
  );
}
