import StoreInventoryPets from "@/app/components/StoreInventoryPets.jsx";

import styles from "../../page.module.css";

export default function Store() {
  return (
    <>
      <div className={styles.storeMainContainer}>
        <StoreInventoryPets />
      </div>
    </>
  );
}
