'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';
export default function CreateTask({ userId }) {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (task.trim() === '') {
      setMessage('Input may not be blank.'); // Set the error message
      return;
    }

    const response = await fetch(`api/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });

    if (response.ok) {
      setTask('');
      setMessage('Task creation successful!'); // Set the success message
    } else {
      // Handle error here
    }
  };

  return (
    <>
      <div className={styles.taskFormMainContainer}>
        
          <form id="taskForm" className={styles.taskForm} onSubmit={handleSubmit}>
          <p className={styles.formTitle}>Create a Task</p>
            <input
              className={styles.taskInput}
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder='Enter a Task..'
              required
            />
          </form>
          <button form="taskForm" className={styles.registerBtn} type='submit'>
            Submit
          </button>
          {message && <p className={styles.successText}>{message}</p>}{' '}
          {/* Display the message */}
        
      </div>
    </>
  );
}
