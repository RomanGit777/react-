import './style.css'
import type {IUser} from "../../models/IUser.ts";
import type { FC } from 'react';
import {Link, useNavigate} from 'react-router-dom';

type UserProps = {
    item: IUser
}

export const User: FC<UserProps> = ({item}: UserProps) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('details', {state: item})
    }
    return (
        <div className="user-box">
            <Link to={'details'} state={item}>{item.name}</Link>

            <button onClick={handleOnClick} >go to details</button>
        </div>
    );
};