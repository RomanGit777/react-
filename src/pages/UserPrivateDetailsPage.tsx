import {useLocation} from "react-router-dom";
import type { IUser } from "../models/IUser";

export const UserPrivateDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <>
            <p>{user.email}</p>
        </>
    );
};