import type {FC} from "react";
import type {IUserDummyResponse} from "../models/IUserDummy.ts";

type PropTypeUserDummy = {
    user: IUserDummyResponse
}
export const UserDummyComponent: FC<PropTypeUserDummy> = ({user}) => {
    return (
        <div className="m-3.5">
            {user.users.map(u => (
                <div key={u.id} className="mb-4 p-4 border rounded">
                    <p>ID: {u.id}</p>
                    <p>First Name: {u.firstName}</p>
                    <p>Last Name: {u.lastName}</p>
                    <p>Username: {u.username}</p>
                    <p>Age: {u.age}</p>
                    <p>SSN: {u.ssn}</p>
                    <p>Birth Date: {u.birthDate}</p>
                    <p>Blood Group: {u.bloodGroup}</p>
                    <p>Email: {u.email}</p>
                    <p>Eye Color: {u.eyeColor}</p>
                    <p>Gender: {u.gender}</p>
                    <p>Height: {u.height}</p>
                    <p>Image: {u.image}</p>
                    <p>IP: {u.ip}</p>
                    <p>MAC Address: {u.macAddress}</p>
                    <p>Maiden Name: {u.maidenName}</p>
                    <p>Password: {u.password}</p>
                    <p>Phone: {u.phone}</p>
                    <p>Role: {u.role}</p>
                    <p>University: {u.university}</p>
                    <p>User Agent: {u.userAgent}</p>
                    <p>Weight: {u.weight}</p>

                    {/* Bank Info */}
                    <div className="ml-4">
                        <p>Card Number: {u.bank.cardNumber}</p>
                        <p>Card Expire: {u.bank.cardExpire}</p>
                        <p>IBAN: {u.bank.iban}</p>
                        <p>Card Type: {u.bank.cardType}</p>
                        <p>Currency: {u.bank.currency}</p>
                    </div>

                    {/* Address */}
                    <div className="ml-4">
                        <p>Address: {u.address.address}</p>
                        <p>City: {u.address.city}</p>
                        <p>Country: {u.address.country}</p>
                        <p>State: {u.address.state}</p>
                        <p>Postal Code: {u.address.postalCode}</p>
                        <p>State Code: {u.address.stateCode}</p>
                        <p>Coordinates:</p>
                        <div className="ml-4">
                            <p>Latitude: {u.address.coordinates.lat}</p>
                            <p>Longitude: {u.address.coordinates.lng}</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="ml-4">
                        <p>Company Name: {u.company.name}</p>
                        <p>Title: {u.company.title}</p>
                        <p>Department: {u.company.department}</p>
                        <p>Company Address:</p>
                        <div className="ml-4">
                            <p>Address: {u.company.address.address}</p>
                            <p>City: {u.company.address.city}</p>
                            <p>State: {u.company.address.state}</p>
                            <p>Country: {u.company.address.country}</p>
                            <p>Postal Code: {u.company.address.postalCode}</p>
                            <p>State Code: {u.company.address.stateCode}</p>
                            <p>Coordinates:</p>
                            <div className="ml-4">
                                <p>Latitude: {u.company.address.coordinates.lat}</p>
                                <p>Longitude: {u.company.address.coordinates.lng}</p>
                            </div>
                        </div>
                    </div>

                    {/* Crypto */}
                    <div className="ml-4">
                        <p>Coin: {u.crypto.coin}</p>
                        <p>Network: {u.crypto.network}</p>
                        <p>Wallet: {u.crypto.wallet}</p>
                    </div>

                    {/* Hair */}
                    <div className="ml-4">
                        <p>Hair Type: {u.hair.type}</p>
                        <p>Hair Color: {u.hair.color}</p>
                    </div>
                </div>
            ))}

            {/* Pagination Info */}
            <div className="mt-4">
                <p>Skip: {user.skip}</p>
                <p>Limit: {user.limit}</p>
                <p>Total: {user.total}</p>
            </div>
        </div>
    );
};