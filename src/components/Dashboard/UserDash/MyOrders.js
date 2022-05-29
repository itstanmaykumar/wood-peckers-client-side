import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import { auth } from '../../../firebase.init';
import DashNav from '../DashNav';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getMyOrders = async () => {
            const email = user?.email;
            const { data } = await axiosPrivate.get(`https://wood-peckers.herokuapp.com/myorders?user=${email}`);
            setOrders(data);
        }
        getMyOrders();
    }, [user]);

    const handleCancelOrder = (orderId) => {
        const proceed = window.confirm("Are you sure , you want to cancel this order?");
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
                        <div className="row mx-3">
                            {
                                orders.map((order) => (
                                    <div className='col-md-6 col-lg-4 p-3' key={order._id}>
                                        <div className='bg-light text-dark p-3 rounded-10 h-100 d-flex flex-column justify-content-between'>
                                            <h5 className='fw-bolder'>{order.title}</h5>
                                            <p>Total: <span className='text-main'>${parseInt(order.total)}</span></p>
                                            <p>Status: <span className='text-main'>{order.dstatus}</span></p>
                                            <p>Payment: <span className='text-main'>{order.pstatus}</span></p>
                                            {
                                                order.txtid !== "" ? (
                                                    <p>TrxId: <span className='text-main'>{order.txtid}</span></p>
                                                ) : (
                                                    <span></span>
                                                )
                                            }
                                            {
                                                (order.pstatus === "Paid") ? (
                                                    <button className="btn btn-secondary disabled d-block w-100">Cancel</button>
                                                ) : (
                                                    <span className='d-block'>
                                                        <button className="btn btn-warning d-block w-100 mb-2">Pay Now</button>
                                                        <button onClick={() => handleCancelOrder(order._id)} className="btn btn-main d-block w-100">Cancel</button>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;