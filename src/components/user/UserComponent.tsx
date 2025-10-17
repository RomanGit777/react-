import type {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <>
            <div className={'m-3.5'}>
                    <p>{user.username} </p>
                <hr/>
            </div>
        </>
    );
};