import { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === "") {
            return;
        }
        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
    };
    console.log(todos);
    return (
        <div>
        <h1>My To Dos({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write your to do..." onChange={onChange} value={todo} />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
            {todos.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;