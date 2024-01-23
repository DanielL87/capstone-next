import styles from '../page.module.css';
import CreateTask from './CreateTask.jsx';
import DisplayTasks from './DisplayTasks.jsx';
import PetHearts from './PetHearts.jsx';

export default function SinglePetInfo({ pokemonData, pet }) {
  return (
    <>
      <div className={styles.pokedexSinglePetMainContainer}>
        <div className={styles.singlePetMainContainer}>
          <div className={styles.singlePetContainer}>
            <img
              src={pokemonData.sprites.other['official-artwork'].front_default}
              alt={`${pokemonData.name} sprite`}
            />
            <div className={styles.singlePetHearts}>
              <PetHearts showHearts={true}/>
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
        <CreateTask />
        <DisplayTasks />
      </div>
    </>
  );
}
