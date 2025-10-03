import {useEffect, useState} from "react";
import {userService} from "../../services/api.users.ts";
import type {IUser} from "../../models/IUser.ts";
import {User} from "../user/User.tsx";

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>()
    useEffect(() => {
        userService.getUsers() .then(allUsers => setUsers(allUsers))
    }, []);

    return (
        <>
            {users?.map(user => <User key={user.id} item={user}/>)}
        </>
    );
};