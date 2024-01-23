import Store from "@/app/components/Store.jsx";
import { prisma } from "@/app/lib/prisma";

import { fetchUser } from "../../lib/fetchUser";

export default async function StorePage() {
  const user = await fetchUser();
  const wallet = await prisma.wallet.findFirst({ where: { userId: user.id } });
  return (
    <>
      <Store user={user} wallet={wallet} />
    </>
  );
}
