import React from 'react'

const ViewProduct = (props) => {

    const errorHandler = (e) => {
        e.target.src = 'http://www.clker.com/cliparts/7/L/Y/h/C/i/image-not-available-hi.png'
    }

    return (
        <div className="modal fade" id={"exModal" + props.item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.item.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className='modal-body my-3'>
                        <img
                            src={props.item.image}
                            className="card-img-top h-100"
                            alt="Product"
                            onError={(e) => errorHandler(e)}
                        />
                        <h5 className="card-title text-left my-3">Product Description:</h5>
                        <p>{props.item.description}</p>
                        <abbr title="Edit Product"><button className="btn btn-outline-warning btn-sm border-0" ><i className="fas fa-edit"></i></button></abbr>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
