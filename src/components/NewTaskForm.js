import React, {useState}from "react";

function NewTaskForm(props) {
  const { onTaskFormSubmit, categories } = props;

  const [taskFields, setTaskFields] = useState({ category: "Code", text: "" });

  const handleTaskFields = (event) => {
    const { name, value } = event.target;
    setTaskFields({ ...taskFields, [name]: value });
  };

  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit(taskFields);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleTaskFields}
          value={taskFields.text}
        />
      </label>

      <label>
        Category
        <select
          name="category"
          onChange={handleTaskFields}
          value={taskFields.category}
        >
          {categories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;