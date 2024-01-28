"use client";
import { useEffect } from "react";
import bonustasks from "../lib/bonusTasks.js";

export default function GenerateBonusTask() {
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
          name: taskName,
          category: category,
          worth: worth,
          petId: pet.id,
        }),
      });
      const data = await response.json();
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
