import {CarComponent} from "../car-component/CarComponent.tsx";
import {useEffect} from "react";
import {getCars} from "../../services/api.service.ts";

export const CarsComponent = () => {

    useEffect(() => {
        getCars().then(value => console.log(value));
    }, []);

    return (
        <><CarComponent/></>
    );
};