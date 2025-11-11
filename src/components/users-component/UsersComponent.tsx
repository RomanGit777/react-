import {useAppDispatch, useAppSelector, userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {useEffect} from "react";

export const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>{user.id} - {user.name} </div>
            ))}
        </div>
    );
};