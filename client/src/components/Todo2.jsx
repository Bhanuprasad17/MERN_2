import React, { useState } from "react";

const Todo2 = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["jai", "dell"]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.trim() === "") return;

    if (isEditing) {
      // Update existing todo
      const updatedList = [...todoList];
      updatedList[currentIndex] = todo;
      setTodoList(updatedList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // Add new todo
      setTodoList([...todoList, todo]);
    }

    setTodo("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todoList.filter((_, index) => index !== id);
    setTodoList(updatedTodos);
  };

  const handleEdit = (id) => {
    setCurrentIndex(id);
    setTodo(todoList[id]);
    setIsEditing(true);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Todo List</h2>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="todo">Todo: </label>
        <input
          id="todo"
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={handleSubmit}>
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      <div>
        {todoList.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span>{item}</span>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo2;
