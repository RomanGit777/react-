import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type PropsItemType = {
    item: IUser,
    foo: (item: IUser) => void
}
const UserComponent:FC<PropsItemType> = ({item, foo}) => {
    return (
        <>
        <div>{item.name}</div>
        <button onClick={() => foo(item)}>
            details</button>
        </>
    );
};
export default UserComponent;