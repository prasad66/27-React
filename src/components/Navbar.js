/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-4 px-lg-5">
                <Link to='/'>
                    <span className="navbar-brand" href="#!"><i className="fas fa-anchor fs-2"></i></span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item ">
                            <Link to='/' >
                                <span className="nav-link " aria-current="page">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Options</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to='/products' >
                                        <span className="dropdown-item" href="#!">All Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/add-product' >
                                        <span className="dropdown-item" href="#!">Add Products</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><span className="dropdown-item user-select-none opacity-25" href="#!">New Arrivals</span></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div>
                            {/* <button className="btn btn-sm py-0 btn-outline-light" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                            </button> */}
                            <div className="d-flex">
                                <input className="form-control me-2 py-0" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light btn-sm py-0 fs-5 border-0" type='button' > <i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
