// import { useState } from "react";
// import styles from "../page.module.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation.js";

import PokemonList from "../components/PokemonList.jsx";

export default function Pokedex() {
  return (
    <div>
      <PokemonList startId={1} endId={15} />
    </div>
  );
}
