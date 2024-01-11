import { fetchUser } from "../lib/fetchUser.js";
import styles from "../page.module.css";
import Link from "next/link";
// import { useRouter } from "next/navigation.js";

export default async function Sidebar() {
  const user = await fetchUser();

  return (
    <div className={styles.sidebar}>
      <Link className={styles.loginBtn} href={"/pokedex"}>
        Pokedex
      </Link>
      {user.id && (
        <Link className={styles.loginBtn} href={`/user/${user.id}`}>
          Profile
        </Link>
      )}
    </div>
  );
}
