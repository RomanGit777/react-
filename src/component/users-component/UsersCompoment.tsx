import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import type {IUserBaseResponse} from "../../models/IUserBaseResponse.ts";

export const UsersCompoment = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then(({users}:IUserBaseResponse) => setUsers(users))
    })


    return (
        <>
            {users.map(user=> <UserComponent key={user.id} user={user}/>)  }
        </>
    );
};