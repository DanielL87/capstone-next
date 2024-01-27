"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";

export default function DisplayTasks({ user, userId, petId, tasks }) {
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   const response = await fetch('api/tasks');
    //   const data = await response.json();

    //   setTasks(data.tasks);
    // };

    // fetchTasks();
    console.log(tasks);
  }, [userId, petId]);

  return (
    <>
      <div className={styles.taskMainContainer}>
        <p className={styles.taskPageTitle}>Tasks</p>
        <div className={styles.taskContainer}>
          {tasks.map((task) => (
            <div key={user}>
              <p>{task.category}</p>
              <p>{task.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
