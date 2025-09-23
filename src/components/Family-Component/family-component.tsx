import {simpsons} from "../../data/Data.ts";
import {CharacterComponent} from "../Character-Component/character-component.tsx";


export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) =>
                    <CharacterComponent key={index} item={value}>
                        {value.info}
                    </CharacterComponent>)
                }
                </div>
                );
            };
