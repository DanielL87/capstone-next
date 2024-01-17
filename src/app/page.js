import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <LandingPage />
      <Footer />
    </div>
  );
}
