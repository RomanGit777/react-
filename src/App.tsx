import {GetUsers} from "./api/hooks/GetUsers.ts";
import {Link} from "react-router-dom";

function App() {
    const { data, isLoading, error } = GetUsers();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {(error as Error).message}</p>

    return (
        <div>
            <h1>Users:</h1>
            <ul>
                {data?.map(user => (
                    <li key={user.id}>
                        {user.id} --- {user.name} ---
                        <Link to={`/user/${user.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;
