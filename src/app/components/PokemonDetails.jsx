'use client';
import React from 'react';
import pokeColor from '../lib/pokeColor.js';
import styles from '../page.module.css';
import PetHearts from './PetHearts.jsx';

export default function PokemonDetails({
  pokemon,
  setSelectedPokemon,
  isSelectPokemon,
  selectedPokemon,
  showHearts,
}) {
  const isSelected =
    selectedPokemon && selectedPokemon.pokedexId === pokemon.pokedexId;

  const gradient = pokeColor[pokemon.type.toLowerCase()] || {
    start: '#ffffff',
    end: '#ffffff',
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
        {showHearts && <PetHearts showHearts={true} />}
        <div className={styles.pokemonMainCardContainer}>
          <div
            className={`${styles.pokemonContainer} ${
              isSelected ? styles.selectedPokemonContainer : ''
            }`}
            style={{
              background: `url("/poke300.png"), ${gradientBackground}`,
            }}
            onClick={handleClick}
          >
            <div className={styles.pokemonCard} key={pokemon.pokedexId}>
              <div className={styles.pokeCardTopContainer}>
                <p className={styles.pokeName}>
                  {pokemon.capitalizedName || pokemon.name}
                </p>
                <div className={styles.pokeInfoContainer}>
                  <div className={styles.rarityContainer}>
                    {pokemon.isRare && (
                      <p className={styles.rarePokemon}>
                        <span className={styles.rareIcon}>🌟</span> Rare
                      </p>
                    )}

                    {pokemon.isShiny && (
                      <p className={styles.shinyPokemon}>
                        <span className={styles.shinyIcon}>✨</span> Shiny
                      </p>
                    )}
                    {!pokemon.isRare && !pokemon.isShiny && (
                      <p className={styles.commonPokemon}>Common</p>
                    )}
                  </div>
                  <p className={styles.pokeType}>Type: {pokemon.type}</p>
                  <img
                    className={`${styles.pokemon} ${
                      isSelected ? styles.selectedPokemon : ''
                    }`}
                    src={pokemon.spriteUrl}
                    alt={`${pokemon.name} sprite`}
                  />
                </div>
                {pokemon.nickname ? (
                  <p className={styles.pokemonNickname}>{pokemon.nickname}</p>
                ) : (
                  <p className={styles.pokemonNickname}>Name Me!</p>
                )}
              </div>
              <p className={styles.stageId}>Pokedex #{pokemon.pokedexId}</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
