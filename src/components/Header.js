import React from "react";
import Button from "./Button";

function Header() {
  const addTask = () => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={addTask} />
    </header>
  );
}

export default Header;
