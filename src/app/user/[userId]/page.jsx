import PokemonDetails from "@/app/components/PokemonDetails.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";
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
    <div>
      {userPokemon.map((pokemon) => (
        <div className={styles.pokemonContainer}>
          <p>{pokemon.name}</p>
          <p>{pokemon.species}</p>
          <img src={pokemon.spriteUrl} alt="" />
        </div>
      ))}
    </div>
  );
}
