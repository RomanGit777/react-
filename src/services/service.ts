import type {ITodoModel} from "../models/todoModel.ts";
import type {todosResponseModel} from "../models/todosResponse.ts";

export const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
export const loadTodos = async (): Promise<ITodoModel[]> => {
    const response:todosResponseModel =  await fetch(endpointTodos) .then(value => value.json());
    return response.todos;
}