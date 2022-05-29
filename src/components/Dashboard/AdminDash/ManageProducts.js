import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import useProducts from '../../../hooks/useProducts';
import DashNav from '../DashNav';

const ManageProducts = () => {

    const [products, setProducts] = useProducts();

    const deleteProduct = (id) => {
        console.log(id);
        axiosPrivate.delete(`https://wood-peckers.herokuapp.com/products/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.warn("Product is deleted.");
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    };

    return (
        <div className='container'>
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
                        <h3 className='text-center text-main mt-4'>Product Inventory</h3>
                        <div className="p-2 table-responsive">
                            {
                                products.length === 0 ?
                                    (
                                        <button className="btn fs-5 text-white pb-2" type="button">
                                            <span className="me-4 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>
                                    )
                                    :
                                    (
                                        <table className="table text-light">
                                            <thead className="text-main">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.map((product) => (
                                                        <tr key={product._id}>
                                                            <td>{product.name}</td>
                                                            <td>{product.stock}</td>
                                                            <td>
                                                                <button className="btn text-danger p-0" data-bs-toggle="modal" data-bs-target="#confirmationModal">Delete</button>
                                                                <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                                                                    <div class="modal-dialog text-dark">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                                <h4 class="modal-title fw-bolder text-main" id="confirmationModalLabel">Please Confirm</h4>
                                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div class="modal-body">
                                                                                <h5>Are you sure, you want to delete this product?</h5>
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button onClick={() => deleteProduct(product._id)} type="button" class="btn btn-main" data-bs-dismiss="modal">Cancel Order</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;