interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <>
            {user.id}
            {user.name}
        </>
    );
};