import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";

export const UserComponent = () => {
    const {id} = useParams();
    const {user} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(userSliceActions.loadUser(id))
    }, []);

    return (
        <div>
            {user &&
                <div>
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Name: {user.username}</p>
                    <p>City: {user.address.city}</p>
                    <p>Company: {user.company.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>WebSite: {user.website}</p>
                </div>

            }
        </div>
    );
};