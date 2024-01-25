'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';

export default function CreateTask() {
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [worth, setWorth] = useState(1);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`api/tasks/${'userId'}/${'petId'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pet, worth: 1, category, name }),
      });

      if (response.ok) {
        const data = await response.json(); // If you need to use the response data

        setName('');
        setPet('');
        setCategory('');
        setMessage('Task creation successful!'); // Set the success message
      } else {
        const errorData = await response.json(); // Get more info about the error
        console.log(errorData); // Log the error data
        setMessage('Failed to create task'); // Set the error message
      }
    } catch (error) {
      console.log(error); // Log any errors that occur during the fetch
    }
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
        {message && <p className={styles.successText}>{message}</p>}{' '}
        {/* Display the message */}
      </div>
    </>
  );
}