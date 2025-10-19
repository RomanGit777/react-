import {CartComponent} from "./CartComponent.tsx";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import {useParams} from "react-router";
import type {ICartBaseResponse} from "../../models/ICartBaseResponse.ts";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/' + id)
            .then(res => res.json())
            .then(({carts}: ICartBaseResponse)=> setCarts(carts));
    }, [id]);

    return (
        <> {carts.map(cart=> <CartComponent key={cart.id} cart={cart}/>)}</>
    );
};