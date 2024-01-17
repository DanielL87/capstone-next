import styles from "../page.module.css";
import DisplayTasks from "./DisplayTasks.jsx";
export default function SinglePetInfo({ pokemonData, pet }) {
  return (
    <div className={styles.singlePetContainer}>
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={`${pokemonData.name} sprite`}
      />
      <div>
        <p>Name: {pet.nickname}</p>
        <p>Species: {pet.name}</p>
        <p>
          Abilities:
          {pokemonData.abilities.map((ability) => (
            <span key={ability.ability.name}>
              {ability.is_hidden && (
                <span className={styles.hiddenTag}> Hidden: </span>
              )}
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
              {ability.is_hidden && " "}
            </span>
          ))}
        </p>
        <p>
          Base Stats:
          <ul>
            <li>HP: {pokemonData.stats[0].base_stat}</li>
            <li>Attack: {pokemonData.stats[1].base_stat}</li>
            <li>Defense: {pokemonData.stats[2].base_stat}</li>
            <li>Special Attack: {pokemonData.stats[3].base_stat}</li>
            <li>Special Defense: {pokemonData.stats[4].base_stat}</li>
            <li>Speed: {pokemonData.stats[5].base_stat}</li>
          </ul>
        </p>
      </div>
      <DisplayTasks />
    </div>
  );
}
