import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../User-Component/UserComponent.tsx";
import {getUsers} from "../../services/api.services.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {   // call hook useEffect
            getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('done');
        }
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id}  item={user}/>)
            }
        </div>
    );
};
