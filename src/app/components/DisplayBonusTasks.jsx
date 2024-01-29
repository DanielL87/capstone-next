import styles from '@/app/page.module.css';
import { IoMdCheckboxOutline } from 'react-icons/io';
export default function DisplayBonusTasks({ task, pet }) {
  const formattedDueDate = new Date(task.dueDate).toLocaleString();
  const completed = task.isCompleted;

  async function handleCompleteTask() {
    const response = await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isCompleted: true,
        petId: pet.id,
        worth: task.worth,
      }),
    });
    const info = await response.json();
    console.log(info);
  }

  return (
    <>
      
      <div className={styles.bonusTaskContainer}>
        <p className={styles.taskName}>
          <span className={styles.taskCategoryTitle}>Task: </span>
          {task.name}
        </p>
        <p className={styles.taskName}>
          <span className={styles.taskCategoryTitle}>Category: </span>
          {task.category}
        </p>
        <p className={styles.taskName}>
          <span className={styles.dueDate}>Due:</span>{' '}
          {new Date(formattedDueDate).toLocaleDateString()}
        </p>
        <p className={styles.taskName}>
          <span className={styles.taskCategoryTitle}>Worth:</span> {task.worth}
        </p>
        <IoMdCheckboxOutline
          className={styles.taskCheckbox}
          onClick={handleCompleteTask}
        />
      </div>
    </>
  );
}
