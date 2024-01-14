import PokemonDetails from "@/app/components/PokemonDetails.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma";

import styles from "../../page.module.css";

export default async function ProfilePage() {
  const user = await fetchUser();

  const userPokemon = await prisma.pet.findMany({
    where: {
      userId: user.id,
    },
  });

  console.log(userPokemon);

  return (
    <div className={styles.pokedexContainer}>
      {userPokemon.map((pokemon) => (
        <PokemonDetails key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
