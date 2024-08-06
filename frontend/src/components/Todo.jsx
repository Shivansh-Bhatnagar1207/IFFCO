import { useEffect, useState, useRef } from "react";
import Todoitems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim() === "") return; // Prevent adding empty tasks
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  count = localStorage.getItem("todos_count");

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div id="todo" className="h-screen w-screen bg-bgc overflow-auto">
      <div
        id="todo-header"
        className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0"
      >
        Task
      </div>
      <section>
        <h2 className="p-3 text-2xl font-bold">Todo-List</h2>
        <hr className="h-px bg-gray-300 border-0" />

        <div
          id="todo-add"
          className="flex m-auto justify-center gap-5 w-[50vw] py-4"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your task"
            id="todo-input"
            className="border border-black rounded-md p-1"
          />
          <button
            onClick={add}
            id="todo-add-btn"
            className="bg-sec grid place-items-center p-2 rounded-md hover:bg-pri text-white"
          >
            Create Task
          </button>
        </div>
        <div
          id="todo-list"
          className="border border-black rounded-md p-2 w-[90%]  m-auto flex flex-col gap-3 text-xl"
        >
          <span>Your Todo-List</span>
          {todos.map((item) => (
            <Todoitems
              key={item.no}
              setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Todo;
