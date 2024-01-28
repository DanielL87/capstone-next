"use client";
import { useEffect } from "react";
import bonustasks from "../lib/bonusTasks.js";

export default function GenerateBonusTask({ pet }) {
  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * bonustasks.length);
    return bonustasks[randomIndex];
  }

  async function GenerateBonusTask() {
    if (Math.random() < 0.1) {
      let randomTask = getRandomTask();
      console.log(randomTask.name);

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
        }),
      });
      const info = await response.json();
      console.log(info);
    }
  }

  // useEffect to run GenerateTask every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      GenerateBonusTask();
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return null;
}
