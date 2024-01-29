"use client";
import { useEffect, useState } from "react";
import bonustasks from "../lib/bonusTasks.js";

export default function GenerateBonusTask({ pet }) {
  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * bonustasks.length);
    return bonustasks[randomIndex];
  }

  async function fetchPetData() {
    const response = await fetch(`/api/pets/${pet.id}`, {});
    const info = await response.json();
    return info.pet.task;
  }

  async function GenerateBonusTask() {
    const petTasks = await fetchPetData();

    console.log(petTasks);

    const filteredTasks = petTasks.filter(
      (task) => task.isBonus && !task.isCompleted
    );

    if (filteredTasks.length < 3) {
      let randomTask = getRandomTask();
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 1);
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: randomTask.name,
          category: randomTask.category,
          worth: 10,
          pet,
          isBonus: true,
          dueDate: dueDate.toISOString(),
        }),
      });
      const info = await response.json();
    }
  }

  // useEffect to run GenerateTask every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      GenerateBonusTask();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return null;
}
