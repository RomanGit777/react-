import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import {AuthResourceComponent} from "../authResource-component/AuthResourceComponent.tsx";

export const AuthResourcesComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts().then(products =>{
            setProducts(products);
        }).catch(reason => {
            console.log(reason)
            refresh()
                .then(() => loadAuthProducts())
                .then(products => setProducts(products))
        })
    }, []);

    return (
        <>{products.map((product) =>  <AuthResourceComponent key={product.id} product={product}/>)}</>
    );
};