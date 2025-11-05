import {UsersComponent} from "../components/UsersComponent.tsx";
import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const UsersPage = () => {

    // useAppSelector is a typed hook that extracts data from the Redux store;
    const {users} = useAppSelector(({userSlice}) => userSlice);
    // here, we’re selecting the userSlice portion of the state.
    const dispatch = useDispatch(); // makes it possible to connect functions from the store
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                dispatch(userSliceActions.loadUsers(users)); // now initial state changed, because this arg "users"
                // is here instead of action, and action gives info back to state
            })
    }, []);
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}

            <UsersComponent/>
        </div>
    );
};