"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation.js";

export default function CreateTask({ user, pet }) {
  const [name, setName] = useState("");
  const [worth, setWorth] = useState(1);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(user.id);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitClicked(true);

    if (!isLoggedIn) {
      setError("You must be logged in to submit.");
      return;
    }

    if (!taskName) {
      setError("Fields must be filled before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: taskName,
          category: category,
          worth: worth,
          petId: pet.id,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setTaskName("");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.taskFormMainContainer}>
        <form id="taskForm" className={styles.taskForm} onSubmit={handleSubmit}>
          <p className={styles.formTitle}>Create a Task</p>
          <div className={styles.taskCategoryContainer}>
            <label className={styles.categoryTitle}>Task Category</label>
            <input
              className={styles.categoryInput}
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter a Category.."
              required
            />
          </div>
          <input
            className={styles.taskInput}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a Task.."
            required
          />
        </form>
        <button form="taskForm" className={styles.registerBtn} type="submit">
          Submit
        </button>
        {message && <p className={styles.successText}>{message}</p>}{" "}
      </div>
    </>
  );
}
