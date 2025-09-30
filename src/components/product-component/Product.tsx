import './product.css'
import type {IProductModel} from "../../models/ProductModel.ts";

type ProductPropsType = {
    product: IProductModel
}

export const Product = ({product:{id,title,description,price,thumbnail}}: ProductPropsType) => {
    return (
        <div className="product-box">
           <p>ID: {id}</p>
            <h3>TITLE: {title}</h3>
            <p>DESCRIPTION: {description}</p>
            <p>PRICE: {price}</p>
            <img src={thumbnail}
                 alt="thumbnail"/>

        </div>
    );
};