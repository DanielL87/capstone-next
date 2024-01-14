"use client";
import { useEffect, useState } from "react";

export default function SelectPet() {
  const [starterArray, setStarterArray] = useState([]);
  const [error, setError] = useState(null);

  async function fetchPokemon() {
    try {
      const starters = [];
      const starterId = [1, 4, 7, 25, 147];

      for (let i = 0; i < starterId.length; i++) {
        const request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${starterId[i]}`
        );
        const response = await request.json();
        console.log(response);
        starters.push(response);
      }
      setStarterArray(starters);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(starterArray);

  if (error) {
    return <div>Error fetching Pokemon: {error.message}</div>;
  }

  return <div>Select a Pet!</div>;
}
