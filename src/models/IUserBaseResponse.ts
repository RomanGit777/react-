import type {IUser} from "./IUser.ts";

export interface IUserBaseResponse {
    total: number;
    skip: number;
    limit: number;
    users: IUser[];
}