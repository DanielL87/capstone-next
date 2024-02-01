import LandingPage from "./components/LandingPage.jsx";
import { fetchUser } from "../lib/fetchUser.js";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma.js";

// export const dynamic = "force-dynamic";
export default async function Home() {
  const user = await fetchUser();

  let collection = null;
  if (user.id) {
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { collectedPets: true },
    });

    collection = userData.collectedPets;
  }

  return (
    <div className={styles.body}>
      <LandingPage user={user} collection={collection} />
    </div>
  );
}
