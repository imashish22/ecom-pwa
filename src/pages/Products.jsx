import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { cartProducts, setCartProducts } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=11&limit=10');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className='container my-3'>
            <div className='row my-4'>
                <h1 className='text-start'>Products</h1>
            </div>
            <div className='row my-5 d-flex justify-content-center align-items-stretch'>
                {products.map((product) => {
                    return (
                        product.images[0] && (
                            <div key={product.id} className='col-md-4 my-3'>
                                <div className='card h-100'> {/* Added class h-100 for equal height */}
                                    <img src={product.images[0]} className='card-img-top' alt={product.title} />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{product.title}</h5>
                                        <p className='card-text'>{product.description}</p>
                                        <p className='card-text'>${product.price}</p>
                                        <button className='btn btn-primary' onClick={() => setCartProducts([...cartProducts, product])}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    );
}

export default Products;
