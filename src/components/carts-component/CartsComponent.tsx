import {CartComponent} from "../cart-component/CartComponent.tsx";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartBaseResponse} from "../../models/ICartBaseResponse.ts";
import {cartService} from "../../services/api.service.ts";
import {useParams} from "react-router";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if(id){
        cartService.getCartOfUser(id)
            .then(({carts}: ICartBaseResponse)=> setCarts(carts));
        }
    }, [id]);

    return (
        <>
            {carts.map(cart => <CartComponent key={cart.id} cart={cart} />)}
        </>
    );
};