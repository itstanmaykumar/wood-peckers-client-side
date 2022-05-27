import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import newsImg from '../../media/newsletter.svg';

const Newsletter = () => {

    const handleNewsletter = (e) => {
        e.preventDefault();
        toast("Newsletter Subscription Successful!")
    }

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])

    return (
        <div className="container mb-4">
            <div className="row justify-content-between align-items-center">
                <div className="mx-auto col-lg-6 col-10">
                    <img className="w-100 p-3" src={newsImg} alt="banner img" />
                </div>
                <div className="col-lg-6 ps-5">
                    <p className="mb-2 text-second ">GET DISCOUNT ALERTS REGULARLY</p>
                    <h3 className="mb-4">Subcribe To <span className="text-main">Our Newsletter</span></h3>
                    <form className='col-10'>
                        <input type="email" className="form-control" placeholder="Your Email Address" defaultValue={user.email} aria-label="Email Address" required />
                        <div className="form-check my-2">
                            <input className="form-check-input bg-dark" type="checkbox" id="gridCheck" defaultChecked />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Get Offers & Discount Alerts
                            </label>
                        </div>
                        <button className='mt-3 btn btn-main' type='submit'>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;