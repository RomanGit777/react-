import {useEffect, useState} from "react";
import type {IUserDummyResponse} from "../models/IUserDummy.ts";
import {userService} from "../services/api.ts";
import {UserDummyComponent} from "./UserDummyComponent.tsx";

export const UsersDummyComponent = () => {

    const [users, setUsers] = useState<IUserDummyResponse | null>(null);
    useEffect(() => {
        userService.getUserDummy().then(user => {
            setUsers(user);
        })
    }, [])
    if(!users) return <div>loading...</div>;


    return (
        <div><UserDummyComponent user={users}/></div>
    );
};