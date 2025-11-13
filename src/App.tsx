import './App.css'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchTodos = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data)
}

function App() {


    const {data,error,isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    });

    if(isLoading) return <div>Loading...</div>
    if(isLoading) return <div>Error: {error}</div>

    return (
      <div>
          {
              data.map((todo) =>
              <li key={todo.id}>{todo.title}</li>
              )
          }
      </div>  );
}

export default App
