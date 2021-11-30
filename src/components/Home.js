import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <header className='container-fluid p-0 h-100 w-100 '>
            <div className='header-img'></div>
            <div className='container heading-cont d-flex flex-column justify-content-center h-100 w-100 align-items-center mt-5'>
                <div className="subheading text-white text-uppercase text-center">WELCOME TO OUR SITE!</div>
                <div className="heading text-uppercase fw-bold text-white text-center">It's Nice To Meet You</div>
                <button className="btn btn-warning btn-lg fw-bold text-white text-uppercase my-5 p-3 px-5" onClick={()=>navigate('/products')}>
                    Discover the Products
                </button>
            </div>
        </header>
    )
}

export default Home
