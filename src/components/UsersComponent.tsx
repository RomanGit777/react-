import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log('users')
    const [users, setUsers] = useState()

    const arr:number[] = useMemo(() => {
        return [11,22,33];
    } ,[])
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
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};