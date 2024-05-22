import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import './Detail.css';

const Detail = () => {
    const productId = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(productId)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId.id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="product-container">
            <div className="product-detail">
                <h1 className="product-title">{product.title}</h1>
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-rate">Rating: *{product.rating.rate}</p>
                <p className="product-rate">Count: {product.rating.count}</p>
            </div>
        </div>
    );
};

export default Detail;
