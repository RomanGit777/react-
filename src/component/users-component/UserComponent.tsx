import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {

    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }

    return (
        <div className={'my-5'}>
            {user.id}{user.username}{user.email}


            <button className={'border-2'} onClick={onButtonClickNavigate}>click me
            </button>
        </div>
    );
};