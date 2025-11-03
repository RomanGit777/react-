import {useEffect, useState} from "react";


export const useFetch = <T,>(url:string) => {
    const [obj, setObj] = useState<T>();
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setObj(data));
    }, [])
    return obj;
}