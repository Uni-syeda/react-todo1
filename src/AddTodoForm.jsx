import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
    const[todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
      event.preventDefault();
      const todoTitle= event.target.elements.title.value;
      const newTodo = {
        title:todoTitle,
        id: Date.now(),
      };
      onAddTodo(newTodo);
      setTodoTitle("");
    };
    return (
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input value={todoTitle} onChange={handleTitleChange} id="todoTitle" type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
  
  export default AddTodoForm;
  