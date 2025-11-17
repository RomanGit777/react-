import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {loadUser} from "../redux/slices/UserSlice.ts";

export const UsersComponent = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadUser());
    },[])
    return (
        <div>
            {users.map(user =>
            <div key={user.id}>
                <div>{user.id} - {user.name}</div>
            </div>
            )}
        </div>
    );
};