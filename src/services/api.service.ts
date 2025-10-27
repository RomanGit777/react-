import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {ProductBaseResponseModelType} from "../models/ProductBaseResponseModelType.ts";
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});


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