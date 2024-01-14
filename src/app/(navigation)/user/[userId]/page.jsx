import PokemonDetails from "@/app/components/PokemonDetails.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";


import styles from "@/app/page.module.css";
import Link from "next/link.js";
import { prisma } from "@/app/lib/prisma.js";

export default async function ProfilePage() {
  const user = await fetchUser();

  const userPokemon = await prisma.pet.findMany({
    where: {
      userId: user.id,
    },
  });
  console.log(userPokemon)

  return (
    <div className={styles.pokedexContainer}>
      {userPokemon.length > 0 ? (
        userPokemon.map((pokemon) => (
          <PokemonDetails key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <Link className={styles.registerBtn} href={"/selectPet"}>
          <div>Select a pet!</div>
        </Link>
      )}
    </div>
  );
}