import styles from "@/app/page.module.css";


export default function DisplayTasks() {


  return (
  <>
  <div className={styles.taskMainContainer}>
  <p className={styles.taskPageTitle}>Tasks</p>
    <div className={styles.taskContainer}>
      <ul className={styles.taskList}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  </div>
  </>
  )
}
