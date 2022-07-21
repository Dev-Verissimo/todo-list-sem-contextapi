import React from "react";

import Todo from "./Todo";

export default function TodoList() {
  const [tasks, setTasks] = React.useState([
    { id: 0, text: "Comprar banana" },
    { id: 1, text: "Comprar pão" }
  ]);

  function addTask() {
    const text = prompt("Digite a tarefa:");
    const task = {
      id: tasks.length,
      text
    };
    setTasks([...tasks, task]);
  }

  function removeTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div class="todo-list">
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((t) => (
          <Todo deleteFunction={removeTask} task={t} />
        ))}
      </ul>
    </div>
  );
}
