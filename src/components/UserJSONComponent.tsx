import type {FC} from "react";
import type {IUsersJSON} from "../models/IUsersJSON.ts";
type TypePropUserJSON = {
    user: IUsersJSON
}
export const UserJSONComponent: FC<TypePropUserJSON> = ({user}) => {
    return (
        <div>
            <div className={'m-3.5'}>
                <p>User Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                    <div>
                        <p>Address:</p>
                        <p>City: {user.address.city}</p>
                        <p>Street: {user.address.street}</p>
                        <p>Suite: {user.address.suite}</p>
                        <p>Zip Code: {user.address.zipcode}</p>
                    </div>
                    <div>
                        <p>Geo:</p>
                        <p>Geo lat: {user.address.geo.lat}</p>
                        <p>Geo lng: {user.address.geo.lng}</p>
                    </div>
                    <div>
                        <p>Company:</p>
                        <p>Name: {user.company.name}</p>
                        <p>Bs: {user.company.bs}</p>
                        <p>Catch phrase: {user.company.catchPhrase}</p>
                    </div>
                <hr/>
            </div>
        </div>
    );
};