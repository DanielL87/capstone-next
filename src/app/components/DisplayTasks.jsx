'use client';
import React, { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";

export default function DisplayTasks({ userId, petId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`api/tasks/${userId}/${petId}`);
      const data = await response.json();

      setTasks(data.tasks);
    };

    fetchTasks();
  }, [userId, petId]);

  return (
    <>
      <div className={styles.taskMainContainer}>
        <p className={styles.taskPageTitle}>Tasks</p>
        <div className={styles.taskContainer}>
          {tasks.map((task, index) => (
            <React.Fragment key={index}>
              <p>{task.category}</p>
              <p>{task.name}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}