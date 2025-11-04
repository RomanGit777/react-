import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const BB = () => {

    const {changeTheme} = useContext(MyContext);

    const handlerDark = () => {
        changeTheme('dark');
    }
    const handlerLight = () => {
        changeTheme('light');
    }

    return (
        <div>
        bb
            <button onClick={handlerDark}>change theme to dark</button>
            <button onClick={handlerLight}>change theme to light</button>
        </div>
    );
};