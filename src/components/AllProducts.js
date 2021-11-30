import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import ViewProduct from './ViewProduct'

const AllProducts = () => {

    const [products, setData] = useState([])

    const apiUrl = 'https://614eac09b4f6d30017b482e5.mockapi.io/products/';

    let navigate = useNavigate();

    useEffect(() => {
        getData();
        document.title = 'All-Products'
    }, []);

    // load all the data
    const getData = async () => {
        try {
            await axios.get(apiUrl)
                .then(res => setData(res.data))
        } catch (error) {

        }
    }

    // delete the specific product 
    const handleDelete = async (id) => {
        console.log('inside delete')
        await axios.delete(apiUrl + id).then(res => getData()).catch(error => console.error)
    }

    // alternate image handler if the image has error or it is broken
    const errorHandler = (e) => {
        e.target.src = 'http://www.clker.com/cliparts/7/L/Y/h/C/i/image-not-available-hi.png'
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        products.length !== 0 ?
                            products.map(product => {
                                return <>
                                    <div className="col-sm-6 col-md-4 col-lg-3 my-3">
                                        <div className="card h-100" key={product.id}>
                                            <img
                                                src={product.image}
                                                className="card-img-top h-100"
                                                alt="Product"
                                                onError={(e) => errorHandler(e)}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{product.name}</h5>
                                                <p className="card-text text-center">Rs.{product.price}</p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between border-0 bg-transparent p-3">
                                                <abbr title="View Product"><button className="btn btn-outline-secondary btn-sm border-0" type="button" data-bs-toggle="modal" data-bs-target={"#exModal" + product.id}><i className="fas fa-list-alt"></i></button></abbr>
                                                <abbr title="Edit Product"><button className="btn btn-outline-warning btn-sm border-0" onClick={() => { navigate('/edit-product/' + product.id) }}><i className="fas fa-edit"></i></button></abbr>
                                                <abbr title="Delete Product"> <button className="btn btn-outline-danger btn-sm border-0" onClick={() => handleDelete(product.id)} ><i className="fas fa-trash"></i></button></abbr>
                                            </div>
                                        </div>
                                        <ViewProduct item={product} />

                                    </div>
                                </>
                            })
                            :
                            <div className='d-flex justify-content-center text-danger mt-3 text-center'>
                                <h2>No Items Available. Please try adding new products!!!</h2>
                            </div>
                    }
                </div>
            </div>
        </>)
}

export default AllProducts
