/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import './EditProduct.css'

const EditProduct = () => {

    const apiUrl = 'https://614eac09b4f6d30017b482e5.mockapi.io/products/';

    useEffect(() => {
        if (params.id)
            getDate();
    }, [])

    const [name, setName] = useState('')
    const [prodName, setProdName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(0)
    const [description, setDescription] = useState('')

    let navigate = useNavigate();
    const params = useParams();

    const getDate = async () => {

        try {
            await axios.get(apiUrl + params.id)
                .then(res => {

                    setProdName(res.data.name);
                    setName(res.data.name);
                    setImage(res.data.image);
                    setPrice(res.data.price);
                    setDescription(res.data.description);
                })
        } catch (error) {
            console.log(error)
        }
    }


    const handleBack = () => {
        console.log('back')
        navigate('/products');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(apiUrl + params.id, { name, price, image, description });
            navigate('/products');
        } catch (error) {
            console.error(error)
        }
    }

    let handle = (e) => {
        setPrice(e.target.value)
    }

    return (
        <>
            <div className='form-container container p-3 my-5 w-50  h-100 rounded-3 bg-dark text-white'>

                <h2>Edit Product - {prodName}</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name <span className='text-danger'>*</span></label>
                        <input id='name' name='name' type="text" className="form-control" autoComplete="off" value={name || ''} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image Url <span className='text-danger'>*</span></label>
                        <input id='image' name='image' type="text" className="form-control" autoComplete="off" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price <span className='text-danger'>*</span></label>
                        <input id='price' name='price' type="number" className="form-control" min={1} autoComplete="off" value={price} onChange={(e) => { handle(e) }} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id='description' name='description' rows="5" cols="50" className="form-control" autoComplete="off" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='d-flex justify-content-around'>
                        <button type="submit" className="btn btn-sm btn-light py-0" onClick={handleSubmit} >Submit</button>
                        <button className="btn btn-sm btn-secondary py-0" onClick={handleBack} >Go Back</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditProduct
