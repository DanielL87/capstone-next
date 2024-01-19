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

  return (
    <>
      <div className={styles.pokedexUserMainContainer}>
        <div className={styles.pokedexContainer}>
          {userPokemon.length > 0 ? (
            userPokemon.map((pokemon) => (
              <div>
                <PokemonDetails key={pokemon.id} pokemon={pokemon} />
                <Link
                  className={styles.registerBtn}
                  href={`/pet/${pokemon.id}`}
                >
                  Pet Details Page
                </Link>
              </div>
            ))
          ) : (
            <Link className={styles.registerBtn} href={"/selectPet"}>
              <div>Select a pet!</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
