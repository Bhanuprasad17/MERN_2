import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState(['Day1']);

  const [todo, setTodo] = useState("");
  const [edit,setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  console.log(todo);

  const AddTodo = () => {
    if (todo.trim() == "") return; // prevent empty todo

    if(edit){
        const updatedList = [...todoList]
        updatedList[editIndex] = todo
        setTodoList(updatedList)
        setEditIndex(null)
        setEdit(false)
    }else{
        // setEdit[]
        setTodoList([...todoList, todo]);
    }

    setTodo("");
  };

  const handleKeydown = (e) =>{
    if(e.key === 'Enter'){
        AddTodo()
    }
  }

  const handleDelete = (id) =>{
    // console.log(e.target)
    const filteredData = todoList.filter((data,index) =>{
        return index != id
    })
    setTodoList(filteredData)
  }

  const handelEdit = (id) =>{
    setTodo(todoList[id])
    setEditIndex(id)
    setEdit(true)
  }

  console.log(todoList);

  return (
    <div>
      <h1>Add Todo</h1>
      <label htmlFor="todo">Todo : </label>
      <input 
            onChange={handleChange} 
            value={todo} type="text" 
            id="todo" 
            onKeyDown={handleKeydown}
      />
      <button onClick={AddTodo}>Add Todo</button>

      {todoList.length > 0 &&
        todoList.map((data, index) => {
          return <div key={index}>
            <span>{data}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handelEdit(index)}>update</button>
          </div>;
        })}
    </div>
  );
};

export default Todo;
