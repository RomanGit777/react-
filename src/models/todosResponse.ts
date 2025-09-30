import type {ITodoModel} from "./todoModel.ts";

export interface todosResponseModel {todos:ITodoModel[], total: number, skip: number, limit: number}