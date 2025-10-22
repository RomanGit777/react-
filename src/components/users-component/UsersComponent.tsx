import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import type {IUserBaseResponse} from "../../models/IUserBaseResponse.ts";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        userService.getAllUsers(currentPage)
            .then(({users}: IUserBaseResponse) => setUsers(users));
    }, [searchParams]);

    return (
        <>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </>
    );
};