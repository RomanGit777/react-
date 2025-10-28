import type {IProduct} from "../../models/IProduct.ts";

interface AuthResourceComponentProps {
    product: IProduct
}

export const AuthResourceComponent = ({product}: AuthResourceComponentProps) => {
    return (
        <div>{product.id} - {product.title}  <img src={product.thumbnail} alt={product.thumbnail}/></div>
    );
};