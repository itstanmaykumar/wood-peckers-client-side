import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const { _id, name, text, img, stock, minOrder, price, rating } = product;
    let navigate = useNavigate();

    const handleProductDetails = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="col-xl-4 col-md-6 text-start mx-auto">
            <div className="p-2 h-100">
                <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow shadow-hover">
                    <div className=''>
                        <img className='mb-3 w-100 d-block rounded-10 shadow' src={img} />
                        <div className='px-3'>
                            <h5 className='fw-bolder'>{name}</h5>
                            <small className='d-flex justify-content-between text-secondary'>
                                <span className='d-block'><i className="pe-2 text-warning fas fa-star"></i><span className='fw-bolder'>{rating}</span></span>
                                <span className='d-block fw-bolder text-dark'>${price}</span>
                            </small>
                        </div>
                        <div className='pt-2 px-3'>
                            <small className='text-secondary text-ss'>{text.slice(0, 55)}...<span /*onClick={() => handleCourseDetails(id)}*/ className="fw-bolder cursor-pointer">Read more</span></small>
                        </div>
                    </div>
                    <div className="pb-3 text-center">
                        <p className='pt-2 mb-0 px-3 text-start'>Available Quantity: <span className='fw-bolder text-main'>{stock}</span></p>
                        <small className='d-block text-start text-main text-ss px-3 pb-3'>Minimum Order Quantity: {minOrder}</small>
                        <button onClick={() => handleProductDetails(_id)} className='btn btn-dark shadow' to='/productdtails'>Order Now <FontAwesomeIcon className='ps-2' icon={faCaretRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;