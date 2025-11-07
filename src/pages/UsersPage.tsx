// import {UsersComponent} from "../components/UsersComponent.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.tsx";

export const UsersPage = () => {

    // useAppSelector is a typed hook that extracts data from the Redux store;
    const {users,loadState} = useAppSelector(({userSlice}) => userSlice);
    // here, we’re selecting the userSlice portion of the state.
    const dispatch = useAppDispatch(); // makes it possible to connect functions from the store
    useEffect(() => {
        dispatch(userSliceActions.loadUsers()); // just call cover of func here
    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}

            {users.map((user) => (<div key={user.id}>{user.name}</div>))}

            {/*<UsersComponent/>*/}
        </div>
    );
};