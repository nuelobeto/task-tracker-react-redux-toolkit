import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}

export default TaskList;
