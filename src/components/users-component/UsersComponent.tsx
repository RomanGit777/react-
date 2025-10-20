import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers().then(res=> res.json).then(user=>setUsers(user));
    }, []);

    return (
        <>
            {users.map(user=> <UserComponent key={user.id} user={user} />)}
        </>
    );
};