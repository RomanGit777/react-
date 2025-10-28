import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {ProductBaseResponseModelType} from "../models/ProductBaseResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data:{products}} = await axiosInstance.get<ProductBaseResponseModelType>('/products');
    return products;
}

export const refresh = async () => {
    const userWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
    const {data: {refreshToken,accessToken} } = await axiosInstance.post<ITokenPair>('/refresh',
        {refreshToken: userWithTokens.refreshToken,
        expiresInMins: 1
        })
            userWithTokens.accessToken = accessToken;
            userWithTokens.refreshToken = refreshToken;
            localStorage.setItem('user', JSON.stringify(userWithTokens));
}