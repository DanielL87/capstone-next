import Store from "@/app/components/Store.jsx";
import { prisma } from "@/app/lib/prisma";

import { fetchUser } from "../../lib/fetchUser";

export default async function StorePage() {
  const user = await fetchUser();
  const wallet = await prisma.wallet.findFirst({ where: { userId: user.id } });

  let collection = null;
  if (user.id) {
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { collectedPets: true },
    });

    collection = userData.collectedPets;
  }
  return (
    <>
      <Store user={user} wallet={wallet} collection={collection} />
    </>
  );
}
