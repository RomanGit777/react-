import {useQuery} from "@tanstack/react-query";
import {fetchTodos} from "../api/todos.ts";

export const TodosList = () => {
    const {data,error,isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    });

    if(isLoading) return <div>Loading...</div>
    if(isLoading) return <div>Error: {error}</div>
    return (
        <> {
            data?.map((todo) =>
                <li key={todo.id}>{todo.id} - {todo.title}</li>
            )
        }</>
    );
};