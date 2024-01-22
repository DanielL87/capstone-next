import Link from "next/link.js";
import styles from "../page.module.css";
export default function BacktoProfile({ user }) {
  return (
    <>
      <div className={styles.pageRerouteContainer}>
        {user.id ? (
          <Link className={styles.loginBtn} href={`/user/${user.id}`}>
            Profile
          </Link>
        ) : (
          <Link className={styles.loginBtn} href={"/login"}>
            Login
          </Link>
        )}
      </div>
    </>
  );
}
