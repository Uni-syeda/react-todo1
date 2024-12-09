function TodoListItem(props) {
    console.log(props)
    return(
        <li>{props.id} {props.title} </li>
    );
}

export default TodoListItem;