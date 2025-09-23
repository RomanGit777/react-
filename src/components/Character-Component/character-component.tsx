import type { ReactNode } from "react";
import type {ICharacter} from "../../models/Model.ts";
import './character.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='m-6 border-2 border-gray-200' >
            <h3>{item.name} {item.surname} {item.age}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};
