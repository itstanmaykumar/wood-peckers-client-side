import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import { auth } from '../../../firebase.init';
import DashNav from '../DashNav';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const getOrders = async () => {
        const { data } = await axios.get(`https://wood-peckers.herokuapp.com/orders`);
        setOrders(data);
    }

    useEffect(() => {
        getOrders();
    }, [user]);

    const handleShipping = (order) => {
        if (order.pstatus !== "Pending") {
            const updatedOrder = {
                id: order._id,
                dstatus: "Shipped"
            };
            axiosPrivate.put("https://wood-peckers.herokuapp.com/orders", updatedOrder)
                .then(res => {
                    console.log(res.data);
                    getOrders();
                    toast.success("Order is delivered!");
                });
        } else {
            toast.error("Order is unpaid.");
        }
    }

    const handleDeleteOrder = (orderId) => {
        axios.delete(`https://wood-peckers.herokuapp.com/orders/${orderId}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.warn("Order is Cancelled.");
                    const remainingorders = orders.filter(order => order._id !== orderId);
                    setOrders(remainingorders);
                }
            })
    };

    return (
        <div className='container'>
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
                        <h3 className='text-center text-main mt-4'>Manage Orders</h3>

                        <div className="pt-2 table-responsive">
                            {
                                orders.length === 0 ?
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
                                                    <th>Delivery</th>
                                                    <th>Payment</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orders.map((order) => (
                                                        <tr key={order._id}>
                                                            <td>{order.title}</td>
                                                            <td>{order.quantity}</td>
                                                            {
                                                                order.dstatus === "Shipped" ? (
                                                                    <td className="text-warning">Shipped</td>
                                                                ) : (
                                                                    <td onClick={() => handleShipping(order)} className="pointer ico text-main">Pending</td>
                                                                )
                                                            }
                                                            {
                                                                order.pstatus === "Paid" ? (
                                                                    <td className="text-warning">Paid</td>
                                                                ) : (
                                                                    <td className="text-main">Unpaid</td>
                                                                )
                                                            }
                                                            {
                                                                order.pstatus === "Paid" ? (
                                                                    <td className="pointer">-</td>
                                                                ) : (
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
                                                                                        <h5>Are you sure, you want to delete this order?</h5>
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button onClick={() => handleDeleteOrder(order._id)} type="button" class="btn btn-main" data-bs-dismiss="modal">Cancel Order</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                )
                                                            }
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

export default ManageOrders;