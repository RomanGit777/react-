import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type PropsItemType = {
    item: IUser,
}
const UserComponent:FC<PropsItemType> = ({item}) => {
    return (
        <div>{item.name}</div>
    );
};
export default UserComponent;