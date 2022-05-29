import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductItem from '../Products/ProductItem';

const BestSellers = () => {
    const [products, setProducts] = useProducts();

    const length = products.length;
    const bestSeller = products.slice(length - 3, length);

    return (
        <div className="container py-4">
            <div className="mx-3 p-5 pb-3 text-center bg-light-pro rounded-10">
                <h2 className="mb-3">Top Tr<span className="border-bottom border-main border-3">ending Pr</span>oducts</h2>
                <div className="row g-4 pt-5">
                    {
                        bestSeller.length === 0 ?
                            (
                                <div className="d-flex justify-content-center text-main">
                                    <h1>Loading.....</h1>
                                    <div className="mt-2 ms-2 spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                bestSeller.map((product) => (
                                    <ProductItem key={product._id} product={product}></ProductItem>
                                ))
                            )

                    }
                </div>
                <div className='my-5 text-center'>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main shadow" to="/products">View All Products</Link>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;