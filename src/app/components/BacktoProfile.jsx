import { Link } from "react-scroll";
import styles from "../page.module.css";
export default function BacktoProfile() {
  return (
    <Link href={"/"}>
      <div className={styles.pageRerouteContainer}>Back to Home</div>
    </Link>
  );
}
