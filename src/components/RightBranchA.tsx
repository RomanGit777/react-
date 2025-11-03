import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {
    const {increment,counterValue} = useContext(MyContext)
    return (
        <div>
            RightBranchA
            <button onClick={() => {
                increment(counterValue);
            }} >click me to increment counter in LBA</button>
        </div>
    );
};