import React from "react";
import { prisma } from "@/app/lib/prisma.js";
import SinglePetInfo from "@/app/components/SinglePetPage.jsx";

export default async function PetPage({ params }) {
  const petId = params.petId;
  const pet = await prisma.pet.findFirst({ where: { id: petId } });

  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pet.pokedexId}`
  );
  const pokemonData = await pokemon.json();

  return <SinglePetInfo pet={pet} pokemonData={pokemonData} />;
}
