"use client";
import { useEffect, useState } from "react";

import StoreInventoryPets from "@/app/components/StoreInventoryPets.jsx";

import styles from "../page.module.css";
import PokemonDetails from "./PokemonDetails.jsx";

export default function Store({ user, wallet }) {
  const [section, setSection] = useState("selectPet");
  const [nickname, setNickname] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [purchasedPet, setPurchasedPet] = useState(null);
  const [cost, setCost] = useState(0);
  const [error, setError] = useState("");
  const [purchaseMessage, setPurchaseMessage] = useState(""); // Fixed this line

  async function handleSubmit() {
    if (!nickname) {
      return setError("Please provide a nickname for your Pet!");
    }

    const response = await fetch("/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nickname,
        name: selectedPokemon.capitalizedName,
        type: selectedPokemon.type,
        pokedexId: selectedPokemon.pokedexId,
        spriteUrl: selectedPokemon.spriteUrl,
        isRare: selectedPokemon.isRare,
        isShiny: selectedPokemon.isShiny,
      }),
    });

    const info = await response.json();

    if (info.pet) {
      getPurchasedPet(info.pet.id);
      handlePurchase(info.pet.cost);
      setError("");
      setSection("congrats");
    } else {
      setError("Failed to create pet. Please try again.");
    }
  }

  async function getPurchasedPet(petId) {
    const response = await fetch(`/api/pets/${petId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const info = await response.json();

    setPurchasedPet(info.pet);
  }

  function handleCancel() {
    setSection("selectPet");
    setCost(0);
    setSelectedPokemon(null);
  }

  useEffect(() => {
    console.log(selectedPokemon);
    console.log(nickname);
    console.log(cost);
    console.log(wallet);
  }, [selectedPokemon, nickname, cost]);

  async function handlePurchase(cost) {
    try {
      const response = await fetch(`/api/wallet`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch wallet balance");
      }

      const walletData = await response.json();
      const walletBalance = walletData?.wallet?.coin;

      if (walletBalance < cost) {
        setPurchaseMessage(
          "Insufficient funds. Please add more coins to your wallet."
        );
      } else {
        // Make an API call to update the wallet balance
        const updateResponse = await fetch(`/api/wallet`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coin: walletBalance - cost }),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update wallet balance");
        }

        setPurchaseMessage("Purchase successful!");

        // Further logic after a successful purchase (if needed)
      }
    } catch (error) {
      console.error("Error handling purchase:", error.message);
      setPurchaseMessage("Failed to handle purchase. Please try again.");
    }
  }

  return (
    <>
      <div className={styles.storeMainContainer}>
        {section === "selectPet" && (
          <div>
            {" "}
            <StoreInventoryPets
              isStore={true}
              setSection={setSection}
              user={user}
              setSelectedPokemon={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
              setCost={setCost}
              wallet={wallet}
              setError={setError}
            />
            <p className={styles.errorStoreTitle}>{error}</p>
          </div>
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
                Complete Purchase({selectedPokemon.cost} Coins)
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
            <p>{error}</p>
          </>
        )}
        {section === "congrats" && (
          <>
            <div className={styles.congratsMainContainer}>
              <div className={styles.congratsContainer}>
                <p className={styles.selectPetTitle}>Congratulations!</p>
                <div className={styles.pokedexContainer}>
                  {purchasedPet && <PokemonDetails pokemon={purchasedPet} />}
                </div>
                <p className={styles.paraText}>
                  You've successfully bought your pet. This is a big step in
                  your journey. Your pet is eager to grow and evolve, and it's
                  all up to you now.
                </p>
                <br />
                <p className={styles.paraText}>
                  Remember, every task you complete will help your pet. The more
                  tasks you do, the faster your pet will evolve. It's not just
                  about helping your pet grow, it's about growing yourself too.
                </p>
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
