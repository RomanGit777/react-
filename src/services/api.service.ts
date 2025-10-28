import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

export const login = async ({username,password,expiresInMins}: LoginData) => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username,password,expiresInMins})
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}