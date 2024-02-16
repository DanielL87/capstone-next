import Profile from "@/app/components/Profile.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";

export default async function ProfilePage() {
  const user = await fetchUser();

  let userPokemon = null;

  if (user.id) {
    userPokemon = await prisma.pet.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
  return (
    <>
      <Profile user={user} userPokemon={userPokemon} />
    </>
  );
}
