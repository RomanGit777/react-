import {UsersComponent} from "../components/UsersComponent.tsx";
import {useAppSelector} from "../main.tsx";

export const UsersPage = () => {

    // useAppSelector is a typed hook that extracts data from the Redux store;
    const {users} = useAppSelector(({userSlice}) => userSlice);
    // here, we’re selecting the userSlice portion of the state.

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}

            <UsersComponent/>
        </div>
    );
};