import SelectPet from "@/app/components/SelectPet.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";
import { userAgent } from "next/server.js";

export default async function SelectPetPage() {
  const user = await fetchUser();
  const collection = await prisma.user.findUnique({
    where: { id: user.id },
    select: { collectedPets: true },
  });

  return <SelectPet user={user} collection={collection} />;
}
