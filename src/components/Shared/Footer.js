import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.svg';

const Footer = () => {

    return (
        <div className="bg-dark-pro">
            <div className="container px-4">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 pt-2 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Quick L</span>inks</h6>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/info">FAQ</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/feedback">Feedback</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/career">Career</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/payment">Payment Options</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/return">Return Policy</Link>
                    </div>
                    <div className="mt-4 pt-2 mb-3 text-white col-lg-4 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Connect Wi</span>th Us</h6>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-map-marker-alt"></i></small>
                            <small>12, Jhankar Mahbub Street,<br />Programming Hero, Bangladesh</small>
                        </div>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-phone-alt"></i></small>
                            <small>999, +88012345</small>
                        </div>
                        <h6 className="mt-3 mb-3 text-white"><span className="border-2 border-bottom border-main">Follow Us On So</span>cial Medias</h6>
                        <div className="my-2">
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand" to="/home">
                                <img width="50" src={logo} alt="main logo" />
                                <span className="ms-1 fs-3 fw-bolder logo-f text-white">woodpeckers</span>
                            </Link>
                        </div>
                        <small className="text-second d-block mt-4 mb-3"><span className="text-white">Woodpeckers, Inc.</span> provides great deals on our huge selection of posters & prints, with fast shipping, free returns, and custom framing options you'll love!</small>
                        <small className="text-second">Copyright &copy; 2022. <span className="text-light">Tanmay Kumar.</span></small>
                        <div>
                            <Link to="/desclaimer" className="text-decoration-none text-main foo-hover"><small>Desclaimer.</small></Link>
                            <Link to="/tnc" className="px-2 text-decoration-none text-main foo-hover"><small>Terms & Conditions.</small></Link>
                            <Link to="/privacy" className="text-decoration-none text-main foo-hover"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;