import {CarComponent} from "../car-component/CarComponent.tsx";
import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import type { ICar } from "../../model/ICar.ts";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then(value => {setCars(value)})
    }, []);

    return (
        <>{cars.map(car => <CarComponent key={car.id} car={car}/>)}</>
    );
};