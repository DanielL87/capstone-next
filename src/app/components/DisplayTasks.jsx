'use client';
import React, { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";

export default function DisplayTasks({ userId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`api/tasks/${userId}`);
      const data = await response.json();

      setTasks(data.tasks);
    };

    fetchTasks();
  }, [userId]);

  return (
    <>
      <div className={styles.taskMainContainer}>
        <p className={styles.taskPageTitle}>Tasks</p>
        <div className={styles.taskContainer}>
          {tasks.map((task, index) => (
            <p key={index}>{task}</p>
          ))}
        </div>
      </div>
    </>
  );
}