import type {ITodoModel} from "../../models/todoModel.ts";
import type {FC} from "react";

interface TodoPropsType {
    todo: ITodoModel,
}

export const Todo: FC<TodoPropsType> = ({todo:{title,id,completed}}: TodoPropsType) => {
    return (
        <>
            <div>ID: {id} Title: {title} Completed: {completed.toString()}</div>
        </>
    );
};