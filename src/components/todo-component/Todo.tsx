import type {ITodoModel} from "../../models/todoModel.ts";
import type {FC} from "react";

interface TodoPropsType {
    todo: ITodoModel,
}

export const Todo: FC<TodoPropsType> = ({todo:{todo,id,completed}}: TodoPropsType) => {
    return (
        <>
            <div>ID: {id} Title: {todo} Completed: {completed.toString()}</div>
        </>
    );
};