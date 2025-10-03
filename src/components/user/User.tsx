import './style.css'
import type {IUser} from "../../models/IUser.ts";
import type { FC } from 'react';

type UserProps = {
    item: IUser
}

export const User: FC<UserProps> = ({item}: UserProps) => {
    return (
        <div className="user-box">
            {item.name}
        </div>
    );
};