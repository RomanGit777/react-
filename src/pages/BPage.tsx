import {Link, Outlet} from "react-router-dom";

export const BPage = () => {
    return (
        <div>
            b Page agffafa
        <hr/>
        <ul>
            <li> <Link to={'1'}>1</Link></li>
            <li> <Link to={'2'}>2</Link></li>
            <li> <Link to={'3'}>3</Link></li>
        </ul>
            <Outlet/>

        </div>
    );
};