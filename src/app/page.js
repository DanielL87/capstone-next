import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage.jsx";
import { fetchUser } from "./lib/fetchUser.js";
import styles from "./page.module.css";

export default async function Home() {
  const user = await fetchUser();

  return (
    <div className={styles.body}>
      <LandingPage user={user} />
      <Footer />
    </div>
  );
}
