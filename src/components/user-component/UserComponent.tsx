import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";

interface UserComponentProps {
    user: IUser
}


export const UserComponent = ({user}: UserComponentProps) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate('/users/' + user.id + '/carts');
    }

    return (
        <div className={'my-5'}>
            {user.id}
            {user.username}
            <button onClick={onButtonClick} className={'border-2'}>click me</button>
        </div>
    );
};