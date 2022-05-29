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
        const proceed = window.confirm("Are you sure , you want to delete this order?");
        if (proceed) {
            axios.delete(`https://wood-peckers.herokuapp.com/orders/${orderId}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        toast.warn("Order is Cancelled.");
                        const remainingorders = orders.filter(order => order._id !== orderId);
                        setOrders(remainingorders);
                    }
                })
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
                        <h3 className='text-center text-main mt-4'>My Orders</h3>

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
                                                                    <td onClick={() => handleDeleteOrder(order._id)} className="pointer ico text-danger">Delete</td>
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