import type {IProduct} from "../../models/IProduct.ts";

interface AuthProductComponentProps {
    product: IProduct
}

export const AuthProductComponent = ({product}: AuthProductComponentProps) => {
    return (
        <div>{product.id} - {product.title} - <img src={product.thumbnail} alt={product.thumbnail}/></div>
    );
};