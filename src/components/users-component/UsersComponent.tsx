import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUserBaseResponse} from "../../models/IUserBaseResponse.ts";
import type {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserBaseResponse)=>setUsers(users));
    }, []);

    return (
        <>
            {users.map(user=> <UserComponent key={user.id} user={user}/>)}
        </>
    );
};