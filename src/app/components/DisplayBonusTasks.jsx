export default function DisplayBonusTasks({ task, pet }) {
  const formattedDueDate = new Date(task.dueDate).toLocaleString();
  const completed = task.isCompleted;

  async function handleCompleteTask() {
    const response = await fetch("/api/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted: true,
        petId: pet.id,
        worth: task.worth,
      }),
    });
    const info = await response.json();
    console.log(info);
  }

  return (
    <div>
      <p>Task: {task.name}</p>
      <p>Category: {task.category}</p>
      <p>Due Date: {formattedDueDate}</p>
      <p>Worth: {task.worth}</p>
      <button onClick={handleCompleteTask}>Complete Task!</button>
    </div>
  );
}
