import './App.css'
import {useFetch} from "./hooks/UseFetch.tsx";
import type {IUserModel} from "./models/IUserModel.ts";
function App() {

    const users = useFetch<IUserModel[]>('https://jsonplaceholder.typicode.com/users');

    return (
      <>
          {
              users &&
              users.map((user: IUserModel) => (
              <div key={user.id}>{user.id}: {user.name}</div>
          ))
          }
      </>  );
}

export default App
