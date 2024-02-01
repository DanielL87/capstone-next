import Link from "next/link.js";
import PokemonDetails from "@/app/components/PokemonDetails.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import styles from "@/app/page.module.css";

export default async function ProfilePage() {
  const user = await fetchUser();

  let userPokemon = null;

  if (user.id) {
    userPokemon = await prisma.pet.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  return (
    <>
      {user.id ? (
        <div className={styles.pokedexUserMainContainer}>
          <h1 className={styles.pokedexUserTitle}>Welcome {user.username}!</h1>

          <div className={styles.pokedexUserWalletContainer}></div>

          <div className={styles.pokedexUserContainer}>
            <div className={styles.pokedexContainer}>
              {userPokemon.length > 0 ? (
                userPokemon.map((pokemon) => (
                  <div key={pokemon.id} className={styles.pokedexCardContainer}>
                    <PokemonDetails
                      pokemon={pokemon}
                      showHearts={true}
                      isProfilePage={true}
                      showRunawayMessage={true}
                    />
                    <Link
                      className={styles.registerBtn}
                      href={`/pet/${pokemon.id}`}
                    >
                      Pet Details Page
                    </Link>
                  </div>
                ))
              ) : (
                <div className={styles.userBlurbContainer}>
                  <p className={styles.userBlurb}>
                    Looks like you need to select your 1st pet!{" "}
                  </p>
                  <p className={styles.userBlurb}>
                    Select a pet to get started!
                  </p>
                  <Link href={"/selectPet"}>
                    <button className={styles.registerBtn}>
                      Select a pet!
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.pokedexUserMainContainer}>
          <p className={styles.heroUserBlurb}>
            Please Log in/Register to View your Profile
          </p>
        </div>
      )}
    </>
  );
}
