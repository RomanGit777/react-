import './product.css';
import type { IProductModel } from "../../models/ProductModel.ts";

type ProductPropsType = {
    product: IProductModel;
};

export const Product = ({
                            product: {
                                id,
                                title,
                                description,
                                price,
                                category,
                                discountPercentage,
                                rating,
                                stock,
                                tags,
                                brand,
                                sku,
                                weight,
                                dimensions,
                                warrantyInformation,
                                shippingInformation,
                                availabilityStatus,
                                reviews,
                                returnPolicy,
                                minimumOrderQuantity,
                                meta,
                                images,
                                thumbnail,
                            },
                        }: ProductPropsType) => {
    return (
        <div className="product-box">
            <p>ID: {id}</p>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Discount Percentage: {discountPercentage}%</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>

            <div>
                <strong>Tags:</strong>
                <ul>
                    {tags.map((tag, i) => (
                        <li key={i}>{tag}</li>
                    ))}
                </ul>
            </div>

            <p>Brand: {brand}</p>
            <p>SKU: {sku}</p>
            <p>Weight: {weight} g</p>

            <p>
                Dimensions: {dimensions.width} x {dimensions.height} x {dimensions.depth}
            </p>

            <p>Warranty: {warrantyInformation}</p>
            <p>Shipping: {shippingInformation}</p>
            <p>Status: {availabilityStatus}</p>
            <p>Return Policy: {returnPolicy}</p>
            <p>Minimum Order Quantity: {minimumOrderQuantity}</p>

            <div>
                <strong>Reviews:</strong>
                <ul>
                    {reviews.map((review, i) => (
                        <li key={i}>
                            {review.reviewerName} ({review.rating}★): {review.comment}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <strong>Meta:</strong>
                <p>Created At: {meta.createdAt}</p>
                <p>Updated At: {meta.updatedAt}</p>
                <p>Barcode: {meta.barcode}</p>
                <img src={meta.qrCode} alt="QR Code" />
            </div>

            <div>
                <strong>Images:</strong>
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`${title} ${i}`} className="product-img" />
                ))}
            </div>

            <img src={thumbnail} alt={`${title} thumbnail`} className="thumbnail" />
        </div>
    );
};
