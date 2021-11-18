import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask, toggleReminder } from "../redux/taskSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: task.id,
      })
    );
  };

  const handleToggleReminder = () => {
    dispatch(
      toggleReminder({
        id: task.id,
      })
    );
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={handleToggleReminder}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={handleDelete}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
