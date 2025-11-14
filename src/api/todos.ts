import axios from "axios";
import type {TodosType} from "../models/TodosType.ts";

export const fetchTodos = async (): Promise<TodosType[]> => {
    return await axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data)
}