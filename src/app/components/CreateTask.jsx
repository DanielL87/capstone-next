'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';
import { useRouter } from 'next/navigation.js';

export default function CreateTask({ user, pet }) {
  const [name, setName] = useState('');
  const [worth, setWorth] = useState(1);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(user.id);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(null);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const task = {
      category,
      name,
      dueDate,
    };

    setSubmitClicked(true);

    if (!isLoggedIn) {
      setError('You must be logged in to submit.');
      return;
    }

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: task.name,
          category: task.category,
          worth: worth,
          pet,
          dueDate: new Date(task.dueDate + 'T00:00:00').toISOString(),
          isBonus: false,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setTaskName('');
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
    setName('');
    setDueDate('');
    setCategory('');
  };

  return (
    <>
      <div className={styles.taskFormMainContainer}>
        <form id='taskForm' className={styles.taskForm} onSubmit={handleSubmit}>
          <p className={styles.formTitle}>Create a Task</p>
          <div className={styles.taskCategoryContainer}>
            <label className={styles.categoryTitle}>Task Category</label>
            <input
              className={styles.categoryInput}
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Enter a Category..'
              required
            />
            <label className={styles.categoryTitle}>Due Date</label>
            <input
              className={styles.categoryInput}
              type='date'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <input
            className={styles.taskInput}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter a Task..'
            required
          />
        </form>
        <button form='taskForm' className={styles.registerBtn} type='submit'>
          Submit
        </button>
        {error && <p className={styles.errorText}>{error}</p>}
        {message && <p className={styles.successText}>{message}</p>}{' '}
      </div>
    </>
  );
}
