import React from 'react'
import './AddProduct.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const apiUrl = 'https://614eac09b4f6d30017b482e5.mockapi.io/products';

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            price: "",
            description: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Product name is required"),
            image: yup.string().required("Provide Image url"),
            price: yup.number().min(1).required("Please enter the price"),
            description: yup.string(),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
        }
    })

    const handleSave = async (data) => {
        try {
            let res = await axios.post(apiUrl, {
                name: data.name,
                image: data.image,
                price: data.price,
                description: data.description,
            });
            console.log(res);
            navigate("/products");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className='form-container container p-3 my-5 w-50  h-100 rounded-3 bg-dark text-white'>
                <h2>Add Product</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name <span className='text-danger'>*</span></label>
                        <input id='name' name='name' type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className="form-control" autoComplete="off" />
                        {formik.touched.name && formik.errors.name ? (<div style={{ color: 'red' }}>{formik.errors.name}</div>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Image Url <span className='text-danger'>*</span></label>
                        <input id='image' name='image' type="text" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} className="form-control" autoComplete="off" />
                        {formik.touched.image && formik.errors.image ? (<div style={{ color: 'red' }}>{formik.errors.image}</div>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Price <span className='text-danger'>*</span></label>
                        <input id='price' name='price' type="text" onChange={formik.handleChange} value={formik.values.price} onBlur={formik.handleBlur} className="form-control" autoComplete="off" />
                        {formik.touched.price && formik.errors.price ? (<div style={{ color: 'red' }}>{formik.errors.price}</div>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Description</label>
                        <textarea id='description' name='description' rows="5" cols="50" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} className="form-control" autoComplete="off" />
                        {formik.touched.description && formik.errors.description ? (<div style={{ color: 'red' }}>{formik.errors.description}</div>) : null}
                    </div>
                    <button type="submit" className="btn btn-sm btn-light py-0" >Submit</button>

                </form>
            </div>

        </>
    )
}

export default AddProduct
