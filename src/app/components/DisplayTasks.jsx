'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import { IoMdCheckboxOutline } from 'react-icons/io';
import DisplayBonusTasks from './DisplayBonusTasks.jsx';
import { useRouter } from 'next/navigation.js';

export default function DisplayTasks({ user, userId, pet, tasks }) {
  const [taskList, setTaskList] = useState([]);
  const [bonusList, setBonusList] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const bonusTasks = tasks.filter(
      (task) => task.isBonus === true && !task.isCompleted
    );
    setBonusList(bonusTasks);
  }, [tasks]);

  useEffect(() => {
    const userTasks = tasks.filter(
      (task) => !task.isBonus === true && !task.isCompleted
    );
    setTaskList(userTasks);
  }, [tasks]);

  async function handleCompleteTask( task ) {
    const response = await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: task.id,
        isCompleted: true,
        petId: pet.id,
        worth: task.worth,
      }),
    });
    const info = await response.json();
    console.log(info);

    router.refresh();
  }

  return (
    <>
    
      <div className={styles.taskMainContainer}>
        <p className={styles.taskPageTitle}>Tasks</p>

        <div className={styles.mainContainer}>
          <div className={styles.taskContainer}>
            <div className={styles.taskTitlesContainer}>
              <p className={styles.bonusTitle}>Daily Tasks</p>
            </div>

            {taskList.length === 0 && (
              <p className={styles.taskName}>Create a task to get started!</p>
            )}

            {taskList.map((task) => (
              <div className={styles.bonusTaskContainer} key={task.id}>
                <div className={styles.bonusTasks}>
                  <p className={styles.taskName}>
                    <span className={styles.taskCategoryTitle}>Category: </span>
                    {task.category}
                  </p>
                  <p className={styles.taskName}>
                    <span className={styles.dueDate}>Due:</span>{' '}
                    {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                  <p className={styles.taskName}>
                    <span className={styles.taskCategoryTitle}>Worth:</span>{' '}
                    {task.worth}
                  </p>
                  <div className={styles.bonusCheckboxContainer}>
                    <IoMdCheckboxOutline
                      className={styles.taskCheckbox}
                      onClick={ ()=> handleCompleteTask (task)}
                      disabled={completedTasks.includes(task)}
                    />
                  </div>
                  
                </div>
                <div className={styles.bonusTaskInfoContainer}>
                    <p className={styles.taskName}>
                      <span className={styles.taskCategoryTitle}>Task: </span>
                      {task.name}
                    </p>
                  </div>
              </div>
            ))}
          </div>
          <div className={styles.bonusTaskMainContainer}>
            <p className={styles.bonusTitle}>Bonus Task!</p>
            {bonusList &&
              bonusList.map((bonusTask) => (
                <DisplayBonusTasks
                  key={bonusTask.id}
                  task={bonusTask}
                  pet={pet}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
