import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useUser from '../../hooks/useUser';

const DashNav = () => {
    const [authUser] = useAuthState(auth);
    const [user] = useUser(authUser.email);

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="col-lg-3">
            <div className="my-3 shadow-lg bg-dark-pro rounded-10 p-4">
                <Link className="btn btn-main text-start d-lg-block mt-2 mb-4 me-4" to="/dashboard">My Profile</Link>
                {
                    user?.role ?
                        (
                            <span className='d-block'>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/editprofile">Edit Profile</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/allorders">Manage Orders</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/allpaintings">Manage Products</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/addpainting">Add Product</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/mkadmin">Make Admin</Link>
                            </span>
                        )
                        :
                        (
                            <span>
                                <Link className="btn btn-main text-start d-lg-block mt-2 mb-3 me-4" to="/dashboard/editprofile">Edit Profile</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/myorders">My Orders</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/pay">Pay</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/addreview">Add Review</Link>
                            </span>
                        )
                }
                <Link className="btn btn-outline-main text-start d-lg-block my-4 me-4" to="/" onClick={handleSignout}>Sign Out</Link>
            </div>
        </div>
    );
};

export default DashNav;