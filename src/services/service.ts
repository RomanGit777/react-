import type {ITodoModel} from "../models/todoModel.ts";

export const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
export const loadTodos = async (): Promise<ITodoModel[]> => {
    return await fetch(endpointTodos) .then(value => value.json());
}