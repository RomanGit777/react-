import './App.css'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
function App() {

     interface IUser {
        name: string;
        id: number;
    }
    // useQuery automatically fetches, caches, and updates data
    // We destructure data, isLoading, and error from the query result
    const {data,isLoading,error} = useQuery({
// A unique key for this query – used by TanStack Query to cache and identify data
        queryKey: ['users'],
        // Function that fetches the data from the API
        queryFn: (): Promise<IUser[]> => axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
    })
    // Show a loading message while the data is being fetched
    if(isLoading) return <p>Loading...</p>
    // Show an error message if the fetch fails
    if(error) return <p>Error: {error.message}</p>

    return (
      <div>
          <h1>Users:</h1>
          <ul>
              {data?.map((user) => (
                  <li key={user.id}>{user.id} --- {user.name}</li>
              ))}
          </ul>

      </div>  );
}

export default App
