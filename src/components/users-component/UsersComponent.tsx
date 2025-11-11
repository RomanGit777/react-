import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {Link} from "react-router-dom";

export const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}> <Link to={'users/:id'}>{user.id} - {user.name}</Link></div>
            ))}
        </div>
    );
};