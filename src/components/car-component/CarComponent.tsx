import type {ICar} from "../../model/ICar.ts";
import './style.css'
interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div className={'car-box'}>{car.id} - {car.brand} - {car.price} - {car.year}</div>
    );
};