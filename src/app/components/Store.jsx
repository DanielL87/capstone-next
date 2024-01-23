"use client";
import StoreInventoryPets from "@/app/components/StoreInventoryPets.jsx";
import styles from "../page.module.css";
import { useState } from "react";
import PokemonDetails from "./PokemonDetails.jsx";
export default function Store({ user }) {
  const [section, setSection] = useState("selectPet");
  const [nickname, setNickname] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handleSubmit() {
    setSection("congrats");
  }

  return (
    <>
      <div className={styles.storeMainContainer}>
        {section === "selectPet" && (
          <StoreInventoryPets
            isStore={true}
            setSection={setSection}
            user={user}
            setSelectedPokemon={setSelectedPokemon}
            selectedPokemon={selectedPokemon}
          />
        )}

        {/* Name your pet section */}
        {section === "namePet" && (
          <>
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
            <div>
              <p className={styles.selectPetTitle}>Name your Pet!</p>
            </div>

            <div className={styles.namePetContainer}>
              <input
                value={nickname}
                className={styles.namePetInput}
                type="text"
                placeholder="Enter a pet name.."
                onChange={(e) => setNickname(e.target.value)}
              />
              <button
                className={styles.petNameSubmitBtn}
                onClick={handleSubmit}
              >
                Purchase Pokemon
              </button>
            </div>
          </>
        )}

        {/* Congrats section */}
        {section === "congrats" && (
          <>
            <div className={styles.congratsMainContainer}>
              <div className={styles.congratsContainer}>
                <p className={styles.selectPetTitle}>Congratulations!</p>
                <div className={styles.pokedexContainer}>
                  {/* <PokemonDetails pokemon={starterPokemon} /> */}
                  {/* {starterPokemon && (
                      <PokemonDetails pokemon={starterPokemon} />
                    )} */}
                </div>
                <p className={styles.paraText}>
                  You've successfully chosen your pet. This is a big step in
                  your journey. Your pet is eager to grow and evolve, and it's
                  all up to you now.
                </p>{" "}
                <br />
                <p className={styles.paraText}>
                  Remember, every task you complete will help your pet. The more
                  tasks you do, the faster your pet will evolve. It's not just
                  about helping your pet grow, it's about growing yourself too.
                </p>{" "}
                <br />
                <p className={styles.paraText}>
                  So, let's get started! Your pet is excited to see what you can
                  achieve together.
                </p>
                <br />
                <p className={styles.paraText}>
                  Click on your pet for more details or go to your tasks to get
                  started!
                </p>
                <br />
                <div className={styles.congratsPetBtnContainer}>
                  <button className={styles.confirmPetBtn}>Go to Tasks</button>
                  <button className={styles.confirmPetBtn}>Profile</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
