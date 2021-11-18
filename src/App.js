import React from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
