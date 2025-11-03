import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log('users')
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
    }, []);
    return (
        <div>
            users
            <UserComponent/>
        </div>
    );
};