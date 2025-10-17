import {UserComponent} from "../user/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[] }>('/users').then(({users}) => setUsers(users));
    }, []);

    return (
        <>
            { users.map((user: IUser) => <UserComponent key={user.id} user={user}/>) }
        </>
    );
};