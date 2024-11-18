import * as React from "react";
import './App.css'

const todoList = [
  {
    id: 1,
    title: "New Skill"
  
  },
  {
    id: 2,
    title: "React"
  },
  {
    id: 3,
    title: "Complete assignment"
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>{item.title}
              {/* <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.language}</div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
