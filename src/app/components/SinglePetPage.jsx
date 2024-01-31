'use client';
import { useState } from 'react';
import styles from '../page.module.css';
import CreateTask from './CreateTask.jsx';
import DisplayTasks from './DisplayTasks.jsx';
import EvolvePet from './EvolvePet.jsx';
import PetHearts from './PetHearts.jsx';
import { useRouter } from 'next/navigation.js';

export default function SinglePetInfo({
  pokemonData,
  pet,
  user,
  tasks,
  collection,
  wallet,
}) {

  const router = useRouter();

  const imageSrc = pet.isShiny
    ? pokemonData.sprites.other['official-artwork'].front_shiny
    : pokemonData.sprites.other['official-artwork'].front_default;

    const [error, setError] = useState("");
    const purchasePet = async () => {
      // Code to purchase the pet back
      if (wallet.coin < 200) {
       return setError("Not enough coins to purchase pet back");
      }
      const response = await fetch(`/api/pets/${pet.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isActive: true,
          hearts: 1,
        }),
      });  
      const info = await response.json();
      router.refresh();
    };


  return (
    <>
      <div className={styles.pokedexSinglePetMainContainer}>
        <div className={styles.singlePetMainContainer}>
          <div className={styles.singlePetContainer}>
            <img src={imageSrc} alt={`${pokemonData.name} sprite`} />
            <div className={styles.singlePetEvolve}>
              {pet.isActive && (
                <EvolvePet pet={pet} collection={collection} wallet={wallet} />
              )}
            </div>
            <div className={styles.singlePetHearts}>
              {pet.isActive && (<PetHearts pokemon={pet} showHearts={true} />)}
            </div>
          </div>
          <div className={styles.pokemonStatsMainContainer}>
            <div className={styles.pokemonStatsContainer}>
              <div className={styles.content}>
                <p className={styles.petName}>
                  <span className={styles.petNameSpan}>Name: </span>{' '}
                  {pet.nickname}
                </p>
                <p className={styles.species}>
                  <span className={styles.speciesName}>Species:</span>{' '}
                  {pet.name}
                </p>

                <div className={styles.speciesInfoContainer}>
                  <p className={styles.speciesInfo}>Abilities:</p>
                  <div className={styles.abilitiesContainer}>
                    {pokemonData.abilities.map((ability) => (
                      <p
                        className={styles.abilityInfo}
                        key={ability.ability.name}
                      >
                        {ability.is_hidden && (
                          <span className={styles.speciesInfo}>
                            <br />
                            Hidden:
                            <br />{' '}
                          </span>
                        )}
                        {ability.ability.name.charAt(0).toUpperCase() +
                          ability.ability.name.slice(1)}
                        {ability.is_hidden && ' '}
                      </p>
                    ))}
                  </div>
                </div>
                <br />
                <br />
                <div className={styles.baseStatsContainer}>
                  <p className={styles.baseStats}>Base Stats:</p>
                  <ul className={styles.baseStatsList}>
                    <li>HP: {pokemonData.stats[0].base_stat}</li>
                    <li>Attack: {pokemonData.stats[1].base_stat}</li>
                    <li>Defense: {pokemonData.stats[2].base_stat}</li>
                    <li>Special Attack: {pokemonData.stats[3].base_stat}</li>
                    <li>Special Defense: {pokemonData.stats[4].base_stat}</li>
                    <li>Speed: {pokemonData.stats[5].base_stat}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {pet.isActive ? (
          <div>
            <CreateTask user={user} pet={pet} />
            <DisplayTasks tasks={tasks} pet={pet} />
          </div>
        ) : (
          <div>
            <p className={styles.petNameSpan}>Pet has Runaway!</p>
            <button className={styles.loginBtn} onClick={purchasePet}>Purchase Pet Back 200 Coin</button>
          </div>
        )}
      </div>
    </>
  );
}
