import './products.css'
import type {IProductModel} from "../../models/ProductModel.ts";
import {useEffect, useState} from "react";
import {loadProducts} from "../../services/productService.ts";
import { Product } from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await loadProducts();
            setProducts(allProducts);
        }
        fetchProducts();
    }, [])

    return (
        <div className={'wrapper'}>
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </div>
    );
};