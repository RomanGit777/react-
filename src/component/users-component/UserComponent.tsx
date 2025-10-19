import type {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div className={'my-5'}>{user.username}{user.email}</div>
    );
};