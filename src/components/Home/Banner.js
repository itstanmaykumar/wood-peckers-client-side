import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from "../../media/showcase.svg";

const Banner = () => {
    return (
        <div className="container mb-4">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-10 order-lg-2">
                    <img className="w-100 p-3" src={heroImg} alt="banner img" />
                </div>
                <div className="col-lg-6 order-lg-1 pe-4">
                    <p className="mb-2 text-second ">15% OFF EVERYTHING</p>
                    <h1 className="mb-3">Buy The <span className="text-main">Finest Sationary Products</span> of Your Office Or Eductaional Institutions</h1>
                    <small className="mb-2 d-block text-secondary">Find top-selling posters and art prints and make them yours with quality canvas, handcrafted frames, or seek wood mounts.</small>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main" to="/products">Explore <i className="ps-1 fas fa-angle-double-right"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;