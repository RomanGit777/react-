import type {ICar} from "../../model/ICar.ts";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>{car.id} - {car.brand} - {car.price} - {car.year}</div>
    );
};