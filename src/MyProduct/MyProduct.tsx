import {type FC} from 'react';
import type {IProduct} from "../model/Product.ts";

type ProductPropsType = {
    product: IProduct;
}

const MyProduct: FC<ProductPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title} {product.price} uah</h2>
            <img src={product.image} alt={product.title} style={{ width: "200px" }} />
        </div>
    );
};

export default MyProduct;