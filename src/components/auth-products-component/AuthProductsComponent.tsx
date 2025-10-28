import {AuthProductComponent} from "../auth-product-component/AuthProductComponent.tsx";
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadAuthProducts} from "../../services/api.service.ts";

export const AuthProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadAuthProducts().then(products => {
            setProducts(products)
        })
    }, []);
    return (
        <>{products.map((product) =>  <AuthProductComponent key={product.id} product={product} />)}</>
    );
};