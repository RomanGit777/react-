import './AA.css'
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
export const AA = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            this is AA component and color value now is - {theme}
        </div>
    );
};