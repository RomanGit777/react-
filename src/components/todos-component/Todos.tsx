import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/todoModel.ts";
import {loadTodos} from "../../services/service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    })

    return (
        <div>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};