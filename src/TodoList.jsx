import TodoListItem from "./TodoListItem";
// create the 'todoList' array
const todoList = [
  {
    id: 1,
    title: "CTD",
  },
  {
    id: 2,
    title: "Learning",
  },
  {
    id: 3,
    title: "Journey",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
