import type {IUser} from "./IUser.ts";

export interface IUserBaseResponse {
    total: number;
    limit: number;
    skip: number;
    users: IUser[];
}