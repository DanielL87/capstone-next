import styles from "../page.module.css";
import Link from "next/link";
// import { useRouter } from "next/navigation.js";

export default async function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link className={styles.loginBtn} href={"/pokedex"}>
        Pokedex
      </Link>
    </div>
  );
}
