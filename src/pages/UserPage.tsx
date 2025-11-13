import {useParams} from "react-router-dom";
import {GetUser} from "../api/hooks/GetUser.ts";

export const UserPage = () => {

    const {id} = useParams(); // read :id from url
    const userId = Number(id); // convert to number
    const {data, isLoading, error} = GetUser(userId);

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>;
    if(!data) return <div>No user found</div>;

    return (
        <div>
            {
                <div>
                    <h1>User Details:</h1>
                    <h1>User id: {data.id}</h1>
                    <h1>User name: {data.name}</h1>
                </div>
                }
        </div>
    );
};