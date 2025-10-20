import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Some = () => {

    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        fetch('http://localhost:5173/' + pg)
            .then(value => value.json())
            .then(value => {
                console.log(value);
            });

    }, [query]);

    return (
        <div>
            Some content
        </div>
    );
};

export default Some;