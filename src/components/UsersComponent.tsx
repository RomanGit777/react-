import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log('users')
    const [users, setUsers] = useState()

    const foo = useCallback(() => {
        console.log('test')
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
    }, []);
    return (
        <div>
            users
            <UserComponent foo={foo}/>
        </div>
    );
};