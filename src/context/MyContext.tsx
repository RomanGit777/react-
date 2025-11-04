import {createContext} from "react";

type ContextValueType = {
    theme: string;
    changeTheme: (theme: string) => void;
};

const defaultValue = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};

export const MyContext = createContext<ContextValueType>(defaultValue)