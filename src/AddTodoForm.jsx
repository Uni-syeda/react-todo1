import * as React from "react";
import "./App.css";
function AddTodoForm(){
    return (
        <form>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" type="text" />
            <button type="button">Add</button>
        </form>

    );
}

export default AddTodoForm;