import * as React from "react";

const todoList = [
  {
    id: 1,
    title: "complete assignment",
    language: "React",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.language}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
