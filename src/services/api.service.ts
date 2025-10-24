import axios from "axios";
import type {ICar} from "../model/ICar.ts";
const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {"Content-Type": "application/json"}
})

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars')
    console.log(axiosResponse);
    const cars = axiosResponse.data;
    console.log(cars);
    return cars;
}

export const addCar = async (car: ICar) => { // is my logic correct that while creating new car we will put all info
    // in this argument?
    await axiosInstance.post('/cars', car); // what does mean url here, and the other "car"
}