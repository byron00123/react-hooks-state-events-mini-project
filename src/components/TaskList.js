import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, deletedItem } = props;

  const displayTasks = tasks.map((task, i) => (
    <Task
      category={task.category}
      key={i}
      deletedItem={deletedItem}
      text={task.text}
    />
  ));

  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;