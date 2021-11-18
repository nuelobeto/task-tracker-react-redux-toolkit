import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        day: action.payload.day,
        reminder: action.payload.reminder,
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    },
    toggleReminder: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, reminder: !task.reminder }
            : task
        ),
      };
    },
  },
});

export const { addTask, deleteTask, toggleReminder } = taskSlice.actions;

export default taskSlice.reducer;
