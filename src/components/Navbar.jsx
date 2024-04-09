import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const {cartProducts} = useCart()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="#">Ashish_Jha_15</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="/cart"><i class="bi bi-cart"></i>&nbsp;Cart ({cartProducts?.length})</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
