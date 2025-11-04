import './AA.css'
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const AA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            it's aa file and theme value now is - {theme}
        </div>
    );
};