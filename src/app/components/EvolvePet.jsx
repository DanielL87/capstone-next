"use client";
export default function EvolvePet(pet) {
  async function handleEvolution() {
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon/${pet.pokedexId}`
    // );
    // const pokemonData = await response.json();
    // console.log(pokemonData);
    console.log(pet);
  }

  return (
    <div>
      <button onClick={handleEvolution}>Evolve Me!</button>
    </div>
  );
}
