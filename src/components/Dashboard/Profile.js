import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import useUser from '../../hooks/useUser';

const Profile = () => {

    const [authUser, loading] = useAuthState(auth);

    const [user, setUser] = useUser(authUser.email);

    if (loading) {
        return (
            <div className="mx-5 spinner-border text-dark" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        );
    } else {
        //console.log(user);
        return (
            <div className="col-lg-8">
                <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
                    <p className="text-main text-center mt-5">You are now logged in as</p>
                    <div className="row mx-2 my-5 align-items-center justify-content-center">
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <img className="d-block w-100 rounded-circle" src={user.img} alt={user.name} />
                        </div>
                        <div className="col-4">
                            <h3 className='m-0 p-0'>{user.name}</h3>
                            {
                                user.role && <small className="text-main">Admin</small>
                            }
                            <small className="d-block">From: {user.location}</small>
                            <small className="d-block">Email: {user.email}</small>
                        </div>
                        {
                            user.bio && <div>
                                <h4 className='text-center mt-5 text-main'>About Me</h4>
                                <p>{user.bio}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;