import {useEffect, useState} from "react";
import type {IUsersJSON} from "../models/IUsersJSON.ts";
import {userService} from "../services/api.ts";
import {UserJSONComponent} from "./UserJSONComponent.tsx";

export const UsersJsonComponent = () => {

    const [users, setUsers] = useState<IUsersJSON[]>([]);
    useEffect(() => {
        userService.getUserJSON().then(users=>setUsers(users));
    }, []);

    return (
        <div>
            {
                users.map((user) => <UserJSONComponent key={user.id} user={user}/>)
            }
        </div>
    );
};