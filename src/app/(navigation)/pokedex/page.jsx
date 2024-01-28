import Pokedex from "@/app/components/Pokedex.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";

export default async function PokedexPage() {
  const user = await fetchUser();

  let collection;
  if (user.id) {
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { collectedPets: true },
    });

    collection = userData ? userData.collectedPets : null;
  }

  return <Pokedex collection={collection} />;
}
