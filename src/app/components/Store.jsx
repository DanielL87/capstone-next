import StoreInventoryPets from "@/app/components/StoreInventoryPets.jsx";
import styles from "../page.module.css";
export default function Store({ user }) {
  return (
    <div>
      <div className={styles.storeMainContainer}>
        <StoreInventoryPets isStore={true} />
      </div>
    </div>
  );
}
