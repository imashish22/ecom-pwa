import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartProducts, setCartProducts } = useCart();

    const handleRemoveProduct = (productId) => {
        setCartProducts(cartProducts.filter(product => product.id !== productId));
    };

    const handleIncreaseQuantity = (productId) => {
        setCartProducts(
            cartProducts.map(product => {
                if (product.id === productId) {
                    return { ...product, quantity: (product.quantity || 1) + 1 };
                }
                return product;
            })
        );
    };

    const handleDecreaseQuantity = (productId) => {
        setCartProducts(
            cartProducts.map(product => {
                if (product.id === productId && product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            })
        );
    };

    // Calculate total cost
    const totalCost = cartProducts.reduce((total, product) => {
        return total + (product.price * (product.quantity || 1));
    }, 0);

    return (
        <div className='container my-5'>
            <div className='row my-4'>
                <h1 className='text-start'>Cart</h1>
            </div>

            <div className='row my-5 d-flex justify-content-center'>
                {cartProducts.length !== 0 ? (
                    cartProducts.map(product => (
                        <div key={product.id} className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.images[0]} className="img-fluid rounded-start" alt={product.title}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description.slice(0,75)}...</p>
                                        <p className="card-text"><small className="text-body-secondary">${product.price}</small></p>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                                            <span>{product.quantity || 1}</span> 
                                            <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                                            <button className="btn btn-danger btn-sm ms-auto" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className='text-center'>Cart is Empty</h1>
                )}
            </div>
            
            {/* Total Cost Section */}
            {cartProducts.length !== 0 && (
                <div className="row justify-content-end">
                    <div className="col-md-4">
                        <h5>Total Cost: ${totalCost.toFixed(2)}</h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
